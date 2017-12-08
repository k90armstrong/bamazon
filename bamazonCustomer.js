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
                name: res[i].product_name,
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
                console.log('You want to buy ' + quantity + ' ' + productId);
            });
    
    });
}


