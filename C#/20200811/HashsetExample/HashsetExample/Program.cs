using System;
using System.Collections.Generic;

namespace HashsetExample
{
    class Program
    {
        public static void Main()
        {
            HashSet<Employee> employees = new HashSet<Employee>();
            Employee emp1 = new Employee("Acc1", "Name1");

            Employee emp2 = new Employee("Acc2", "Name2");

            Employee emp3 = new Employee("Acc2", "Name2");

            Console.WriteLine("employees.Add(emp1): {0}", employees.Add(emp1));
            
            Console.WriteLine("employees.Add(emp2): {0}", employees.Add(emp2));

            Console.WriteLine("emp1.Equals(emp1): {0}", emp1.Equals(emp1));
            Console.WriteLine("emp1.Equals(emp2): {0}", emp1.Equals(emp2));

            Console.WriteLine("employees.Contains(emp2): {0}", employees.Contains(emp2));

            Console.WriteLine("employees.Add(emp1): {0}", employees.Add(emp1));

            Console.WriteLine("employees.Add(emp3): {0}", employees.Add(emp3));

            Console.ReadLine();
        }
    }
}
