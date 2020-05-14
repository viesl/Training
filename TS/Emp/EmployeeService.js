"use strict";
exports.__esModule = true;
exports.EmployeeService = void 0;
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
        this.emp = [
            {
                id: 1,
                name: 'Mayura',
                designation: 'Trainer',
                department: 'Soft Eng',
                Gender: 'Female'
            },
            {
                id: 2,
                name: 'Sam',
                designation: 'HR Manager',
                department: 'Human Resource',
                Gender: 'Male'
            },
            {
                id: 3,
                name: 'James',
                designation: 'Escalation Manager',
                department: 'Support',
                Gender: 'Male'
            },
            {
                id: 4,
                name: 'Smitha',
                designation: 'Data Testing Engineer',
                department: 'DTS',
                Gender: 'Female'
            },
            {
                id: 5,
                name: 'Swathi',
                designation: 'Tech Lead',
                department: 'Soft Eng',
                Gender: 'Female'
            },
        ];
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.emp;
    };
    EmployeeService.prototype.getEmployeesbyId = function (id) {
        return this.emp.filter(function (e) { return e.id === id; });
    };
    EmployeeService.prototype.getEmployeeCount = function () {
        return this.emp.length;
    };
    EmployeeService.prototype.getFemaleEmployeeCount = function () {
        return this.emp.filter(function (x) { return x.Gender == 'Female'; }).length;
    };
    EmployeeService.prototype.addEmployee = function (id, name, designation, department, gender) {
        this.emp.push({ id: id,
            name: name,
            designation: designation,
            department: department,
            Gender: gender });
    };
    EmployeeService.prototype.removeEmployeeById = function (id) {
        var empIndex;
        for (var index = 0; index < this.emp.length; index++) {
            if (this.emp[index].id === id) {
                empIndex = index;
            }
        }
        this.emp.splice(empIndex, 1);
    };
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
