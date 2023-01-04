use shop;

-- item with minimum weight
SELECT item_name, min(item_weight) FROM items;

-- finding warehouses in PUNE
SELECT * FROM cities_warehouses WHERE city_name='Pune';

-- Find the details of items ordered by a customer “Mr. Patil”
select * from items where item_id = (select item_id from items_orders where order_id =
(Select order_id from customers_orders where customer_name = "Mr. Patil"));

-- warehouse with most stores
SELECT warehouse_id, COUNT(*) 
FROM warehouses_stores
GROUP BY warehouse_id 
ORDER BY COUNT(*) DESC 
LIMIT 1;

-- an item which is ordered for a minimum number of times
SELECT item_id, COUNT(*) 
FROM items_orders
GROUP BY item_id
ORDER BY COUNT(*) ASC
LIMIT 1;

-- detailed orders by each customer
SELECT customers.customer_id, customers.customer_name, orders.order_id,
items.item_id, items.item_name, items.item_weight, items.item_cost
FROM customers
INNER JOIN orders ON customers.customer_id = orders.customer_id
INNER JOIN items ON orders.item_id = items.item_id; 
