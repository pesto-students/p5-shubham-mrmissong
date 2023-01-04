-- creating a database
create database shop;
use shop;

-- creating tables
-- cities, warehouses, stores, customers, orders, items
create table cities 
(
city_id int not null primary key,
city_name varchar(50) not null,
state varchar(50) not null
);

create table warehouses 
(
warehouse_id int not null primary key,
warehouse_name varchar(50) not null,
city_id int not null,
foreign key (city_id) references cities(city_id)
);

create table stores 
(
store_id int not null primary key,
store_name varchar(50) not null,
warehouse_id int not null,
city_id int not null,
foreign key(city_id) references  cities(city_id),
foreign key(warehouse_id)references warehouses(warehouse_id)
);

create table customers 
(
customer_id int not null primary key,
customer_name varchar(50) not null,
city_name varchar(50) not null,
city_id int not null,
foreign key(city_id) references  cities(city_id)
);
create table orders
(
order_id int not null primary key,
order_date date not null,
customer_id int not null,
foreign key (customer_id) references customers(customer_id)
);

create table items 
(
item_id int not null primary key,
item_name varchar(50) not null,
item_cost decimal(10,2) not null,
item_weight decimal(10,2) not null
);

-- creating relationships between tables
create table cities_warehouses
(
city_id int not null primary key,
warehouse_id int not null,
foreign key(warehouse_id)references warehouses(warehouse_id)
);
drop table cities_warehouses;
create table warehouses_stores
(
warehouse_id int not null,
store_id int not null,
foreign key(warehouse_id) references warehouses(warehouse_id),
foreign key(store_id) references stores(store_id)
);

create table customers_orders
(
customer_id int not null,
order_id int not null,
foreign key(customer_id) references customers(customer_id),
foreign key(order_id) references  orders(order_id)
);


create table items_orders
(
item_id int not null,
order_id int not null,
foreign key(item_id) references  items(item_id),
foreign key(order_id) references  orders(order_id)
);

create table stores_items
(
store_id int not null,
item_id int not null,
foreign key(store_id) references stores(store_id),
foreign key(item_id) references  items(item_id)
);
-- altering tables
alter table customers_orders add customer_name varchar(50);
alter table warehouses_stores add warehouse_name varchar(50);
alter table warehouses_stores add store_name varchar(50);
alter table orders add item_id int;
alter table stores add item_id int;
alter table stores_items add item_name varchar(50);
alter table cities_warehouses add city_name varchar(50);
alter table cities_warehouses add warehouse_name varchar(50);
-- joining tables

INSERT INTO cities_warehouses (city_id, city_name, warehouse_id, warehouse_name) 
SELECT cities.city_id,cities.city_name, warehouses.warehouse_id,warehouses.warehouse_name
FROM cities
INNER JOIN warehouses 
ON cities.city_id = warehouses.warehouse_id;

INSERT INTO warehouses_stores (warehouse_id, warehouse_name, store_name, store_id)
SELECT  warehouses.warehouse_id,warehouses.warehouse_name, stores.store_name, stores.store_id 
FROM warehouses 
INNER JOIN stores ON warehouses.warehouse_id = stores.warehouse_id;

INSERT INTO customers_orders(customer_id, customer_name, order_id)
SELECT customers.customer_id, customers.customer_name, orders.order_id
FROM customers
INNER JOIN orders ON customers.customer_id = orders.customer_id;

INSERT INTO items_orders(item_id, order_id)
SELECT items.item_id, orders.order_id
FROM items
INNER JOIN orders ON items.item_id = orders.item_id;

INSERT INTO stores_items (store_id, item_id, item_name)
SELECT stores.store_id, items.item_id, items.item_name
FROM stores
INNER JOIN items
ON stores.item_id = items.item_id;
-- viewing tables

select * from cities;
select * from warehouses;
select * from stores;
select * from customers;
select * from orders;
select * from items;
select * from cities_warehouses;
select * from items_orders;
select * from stores_items;
select * from warehouses_stores;
select * from customers_orders;