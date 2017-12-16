# bamazon
This is a CLI program that relies on a Mysql database connection.  The database schema can be found in the schema.sql and some initial entries in the database are found in seeds.sql.
## Start
Below shows the first prompt when running the bamazonCustomer.js file.
It uses inquirer for all of the prompts.  A user can scroll using the arrow keys to select what they want to buy.
![example 1 bamazon](https://github.com/k90armstrong/bamazon/blob/master/images/example%201.PNG)
## Selecting a Quantity
A user then chooses how many of the product they would like to purchase. If there is enough, then the purchase will be successful. The user is then prompted to either select a new product or quit.
![Example 2 bamazon](https://github.com/k90armstrong/bamazon/blob/master/images/example%202.PNG)
## Not Enough Inventory
If a user chooses a quantity that is more than what is available, they are warned of this and prompted to keep buying or quit.
![Example 3 Bamazon](https://github.com/k90armstrong/bamazon/blob/master/images/example%203.PNG)
