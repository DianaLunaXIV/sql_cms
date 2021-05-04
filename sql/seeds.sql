USE sql_cms;

INSERT INTO departments (id, name)
VALUES(01, "Yavin Praxeum");

INSERT INTO role (id, title, salary, department_id)
VALUES(01, "Jedi Master", 100000, 01);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES(004, "Kyle", "Katarn", 01, 001);

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES(001, "Luke", "Skywalker", 01);