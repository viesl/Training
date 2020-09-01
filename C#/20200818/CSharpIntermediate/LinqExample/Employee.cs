using System;
using System.Collections.Generic;
using System.Text;

namespace LinqExample
{
    public class Employee
    {
        public int employeeId;
        public string employeeName;
        public int salary;
        public string location;

        public static List<Employee> GetEmployees()
        {
            List<Employee> employeeList = new List<Employee>();

            employeeList.Add(new Employee { employeeId = 1, employeeName = "Mojo", salary = 3000, location = "Vilnius" });
            employeeList.Add(new Employee { employeeId = 362, employeeName = "Mojo1", salary = 4000, location = "US" });
            employeeList.Add(new Employee { employeeId = 43, employeeName = "Mojo2", salary = 5000, location = "Kaunas" });
            employeeList.Add(new Employee { employeeId = 667, employeeName = "Mojo3", salary = 6000, location = "Vilnius" });

            return employeeList;
        }
    }
}
