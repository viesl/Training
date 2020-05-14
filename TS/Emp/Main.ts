import { EmployeeService } from "./EmployeeService"; 

let e=new EmployeeService(); 
console.log(e.getEmployees()); 
console.log(e.getEmployeesbyId(4)); 
console.log("Female Count "+e.getFemaleEmployeeCount()); 
console.log("Employee Count" +e.getEmployeeCount()); 
console.log("Deleted id 4");
e.removeEmployeeById(4);
e.addEmployee(7,"Vieslav","SDD","Engineering","Male");
console.log(e.getEmployees()); 