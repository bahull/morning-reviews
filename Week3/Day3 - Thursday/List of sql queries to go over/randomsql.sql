CREATE TABLE person (
id serial primary key,
name varchar(255),
age int,
height int,
City varchar(255),
FavoriteColor varchar(255) );

insert into person (name, age, height, city, favoritecolor)
values('billy', 55, 83, 'plano', 'pink')

SELECT * FROM person WHERE name LIKE '%h%'

SELECT * FROM person WHERE name LIKE 'c__%'

SELECT * FROM person ORDER BY height DESC;

SELECT * FROM Person WHERE Age > 20;

CREATE TABLE Orders ( PersonID integer, ProductName string, ProductPrice float, Quantity integer );

CREATE TABLE Orders ( PersonID integer, ProductName string, ProductPrice float, Quantity integer );

SELECT * FROM Artist ORDER BY Name Desc LIMIT 10;

SELECT COUNT(*) FROM Employee WHERE City = "Lethbridge";

DELETE FROM <table_name>
WHERE <column_name> = <value>;


insert into people (name, age, height, city, favoritecolor)
values('Tom', 100, 23, 'Dallas', 'purple')
returning name

