USE sql_cms;

INSERT INTO departments (id, name)
VALUES(01, "Yavin Praxeum");

INSERT INTO roles (id, title, salary, department_id)
VALUES(01, "Jedi Master", 100000, 01);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES(4, "Kyle", "Katarn", 01, 1);

INSERT INTO employees (id, first_name, last_name, role_id)
VALUES(1, "Luke", "Skywalker", 01);