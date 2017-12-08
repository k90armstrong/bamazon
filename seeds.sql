USE bamazon;
DELETE FROM products;

INSERT INTO products (product_name, department_name, customer_price, stock_quantity) 
VALUES ('Couch', 'Furniture', 100.45, 200);
INSERT INTO products (product_name, department_name, customer_price, stock_quantity)
VALUES ('Recliner', 'Furniture', 500.45, 20);
INSERT INTO products (product_name, department_name, customer_price, stock_quantity) 
VALUES ('Chair', 'Furniture', 50.45, 2000);
INSERT INTO products (product_name, department_name, customer_price, stock_quantity) 
VALUES ('Laptop', 'Tech', 600.45, 200);
INSERT INTO products (product_name, department_name, customer_price, stock_quantity) 
VALUES ('Apple Watch', 'Tech', 300.45, 200);
INSERT INTO products (product_name, department_name, customer_price, stock_quantity) 
VALUES ('Desktop', 'Tech', 800.45, 200);
INSERT INTO products (product_name, department_name, customer_price, stock_quantity) 
VALUES ('IPad', 'Tech', 700.45, 200);
INSERT INTO products (product_name, department_name, customer_price, stock_quantity) 
VALUES ('Nest Thermostat', 'Tech', 200.45, 200);
INSERT INTO products (product_name, department_name, customer_price, stock_quantity) 
VALUES ('Apple', 'Food', 0.45, 20);
INSERT INTO products (product_name, department_name, customer_price, stock_quantity) 
VALUES ('Melon', 'Food', 3.45, 2);
INSERT INTO products (product_name, department_name, customer_price, stock_quantity) 
VALUES ('Pear', 'Food', 2.45, 40);
INSERT INTO products (product_name, department_name, customer_price, stock_quantity) 
VALUES ('Banana', 'Food', 1.45, 600);

SELECT * FROM products;