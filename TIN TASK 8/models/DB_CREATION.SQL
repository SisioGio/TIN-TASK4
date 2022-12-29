drop table orders;

drop table products;

DROP TABLE users;

CREATE TABLE
    if not exists users(
        id int not null auto_increment,
        firstname varchar(255) not null,
        surname varchar(255) not null,
        email varchar(255) not null,
        birthdate date not null,
        createdAt timestamp default current_timestamp not null,
        updatedAt timestamp,
        primary key(id)
    );

CREATE TABLE
    if not exists products(
        id int not null auto_increment,
        name varchar(255) not null,
        description longtext not null,
        price double(5, 2) not null,
        createdAt timestamp default current_timestamp not null,
        updatedAt timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        primary key(id)
    );

CREATE TABLE
    if not exists orders(
        id int not null auto_increment,
        user_id int not null,
        product_id int not null,
        paid boolean default false,
        sent boolean default false,
        delivered boolean default false,
        createdAt timestamp default current_timestamp not null,
        updatedAt timestamp,
        foreign key(user_id) REFERENCES users(id),
        foreign key(product_id) REFERENCES products(id),
        primary key(id)
    );

INSERT INTO
    users (
        firstname,
        SURNAME,
        BIRTHDATE,
        EMAIL
    )
VALUES (
        "MARIO",
        "CALIRI",
        "1994-03-11",
        "MARIO@GMAIL.COM"
    );

INSERT INTO
    users (
        firstname,
        SURNAME,
        BIRTHDATE,
        EMAIL
    )
VALUES (
        "ALESSIO",
        "GIOVANNINI",
        "1998-03-17",
        "ALESSIO@GMAIL.COM"
    );

INSERT INTO
    users (
        firstname,
        SURNAME,
        BIRTHDATE,
        EMAIL
    )
VALUES (
        "LUCA",
        "PILI",
        "1993-03-23",
        "LUCA@GMAIL.COM"
    );

INSERT INTO
    users (
        firstname,
        SURNAME,
        BIRTHDATE,
        EMAIL
    )
VALUES (
        "LUCIA",
        "GIOELE",
        "1995-03-13",
        "LUCIA@GMAIL.COM"
    );

INSERT INTO
    users (
        firstname,
        SURNAME,
        BIRTHDATE,
        EMAIL
    )
VALUES (
        "LAURA",
        "PLACIDI",
        "1978-03-13",
        "LAURA@GMAIL.COM"
    );

INSERT INTO
    users (
        firstname,
        SURNAME,
        BIRTHDATE,
        EMAIL
    )
VALUES (
        "TIZIANA",
        "MELARAGNI",
        "1999-03-13",
        "TIZIANA@GMAIL.COM"
    );

INSERT INTO
    users (
        firstname,
        SURNAME,
        BIRTHDATE,
        EMAIL
    )
VALUES (
        "ESTER",
        "BERNABEI",
        "2000-07-27",
        "ESTER@GMAIL.COM"
    );

INSERT INTO
    products (name, description, price)
values (
        "PROD1",
        "DESCRIPTION1",
        200.00
    );

INSERT INTO
    products (name, description, price)
values (
        "PROD2",
        "DESCRIPTION2",
        100.00
    );

INSERT INTO
    products (name, description, price)
values (
        "PROD3",
        "DESCRIPTION3",
        240.00
    );

INSERT INTO
    products (name, description, price)
values (
        "PROD4",
        "DESCRIPTION4",
        150.00
    );

INSERT INTO
    products (name, description, price)
values ("PROD5", "DESCRIPTION5", 20.00);

INSERT INTO
    products (name, description, price)
values ("PROD6", "DESCRIPTION6", 10.00);

INSERT INTO orders (user_id,product_id) values( 1,2);

INSERT INTO orders (user_id,product_id) values( 4,1);

INSERT INTO orders (user_id,product_id) values( 3,1);

INSERT INTO orders (user_id,product_id) values( 1,3);

INSERT INTO orders (user_id,product_id) values( 2,4);

INSERT INTO orders (user_id,product_id) values( 2,5);

INSERT INTO orders (user_id,product_id) values( 4,6);

INSERT INTO orders (user_id,product_id) values( 7,6);

INSERT INTO orders (user_id,product_id) values( 2,6);

INSERT INTO orders (user_id,product_id) values( 4,3);

INSERT INTO orders (user_id,product_id) values( 3,5);

INSERT INTO orders (user_id,product_id) values( 1,1);

INSERT INTO orders (user_id,product_id) values( 2,1);

INSERT INTO orders (user_id,product_id) values( 2,6);

INSERT INTO orders (user_id,product_id) values( 4,3);

INSERT INTO orders (user_id,product_id) values( 7,5);