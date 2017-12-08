// require modules
var inquirer = require('inquirer');
var mysql = require('mysql');

// connect to the databse
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "k90armstrong",
  
    // Your password
    password: "12345678",
    database: "bamazon"
  });

connection.connect(function(err) {
    if (err) throw err;
    startApp();
});

function startApp() {
    // start by getting everything from the database
    var query = "SELECT item_id, product_name, department_name, customer_price FROM products ORDER BY product_name";
    connection.query(query, function(err, res) {
        if (err) throw err;
        var choices = [];
        for (var i = 0; i < res.length; i++) {
            var choice = {
                name: res[i].product_name + " $" + res[i].customer_price,
                value: res[i].item_id
            }
            choices.push(choice);
        }
        // create the options for inquirer
        inquirer
            .prompt([{
                name: "product",
                type: "list",
                message: "What would you like to buy?",
                choices: choices
            },
            {
                name: "quantity",
                type: "input",
                message: "How many would you like to buy?",
                validate: function(value) {
                  if (isNaN(value) === false) {
                    return true;
                  }
                  return false;
                }   
            }
            ]).then(function(answer) {
                var quantity = answer.quantity;
                var productId = answer.product;
                processRequest({id: productId, qty: quantity}, function(err) {
                    if (err) {
                        console.log('There was an error', err);
                    } else {
                        askIfFinished(function(response) {
                            if (response === 'no') {
                                console.log('Thanks!');
                                process.exit();
                            } else {
                                startApp();
                            }
                        })
                    }
                });
            });
    
    });
}

function processRequest(data, cb) {
    var query1 = "SELECT stock_quantity FROM products WHERE ?";
    var query2 = "UPDATE products SET ?"
    connection.query(query1, {item_id: data.id}, function(err, res) {
        if (err){
            return cb(err);
        }
        if (res[0].stock_quantity >= data.qty) {
            // we can do the purchase
            var newQty = {stock_quantity: res[0].stock_quantity - data.qty};
            connection.query(query2, newQty, function(err, res) {
                if (err) {
                    return cb(err);
                } 
                console.log('Purchase Successful!');
                return cb();
            });
        } else {
            // we can't do the purchase, there aren't enough
            console.log('There are only ' + res[0].stock_quantity + ' items remaing!');
            return cb();
        }
    });

}

function askIfFinished(cb) {
    inquirer
    .prompt([{
        name: "answer",
        type: "list",
        message: "Would you like to buy another item?",
        choices: ["yes", "no"]
    }]).then(function(answer){
        return cb(answer.answer);
    });
}


