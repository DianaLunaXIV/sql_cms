class Employee {
    constructor(empID, firstName, lastName, roleID, managerID) {
        this.id = empID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleID = roleID;
        this.managerID = managerID;
    }
}

module.exports = Employee