using System;
using System.Collections.Generic;
using System.Text;

namespace ExceptionExample
{
    class EmployeeCount
    {
        
        public void showCount(int employeeCount)
        {

            if (employeeCount == 0)
            {
                throw (new ZeroOrBelowException("Zero Employees found"));
            }
            else if (employeeCount < 0)
            {
                throw (new ZeroOrBelowException("Less than zero Employees found"));
            }
            else
            {
                Console.WriteLine("Employee Count: {0}", employeeCount);
            }
        }
    }
}
