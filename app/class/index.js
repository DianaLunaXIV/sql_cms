class Department {
    constructor(deptID, name) {
        this.id = deptID;
        this.name = name;
    }
}

class Employee {
    constructor(empID, firstName, lastName, roleID, managerID) {
        this.id = empID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleID = roleID;
        this.managerID = managerID;
    }
}

class Role {
    constructor(roleID, name, salary, deptID) {
        this.id = roleID;
        this.name = name;
        this.salary = salary;
        this.departmentID = deptID;
    }
}

module.exports = { Department, Role, Employee }