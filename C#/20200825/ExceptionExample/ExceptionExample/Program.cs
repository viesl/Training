using System;

namespace ExceptionExample
{
    class Program
    {
        static void Main(string[] args)
        {
            EmployeeCount temp = new EmployeeCount();
            try
            {
                temp.showCount(-1);
            }
            catch (ZeroOrBelowException e) when (e.Message == "Zero Employees found")
            {
                Console.WriteLine("Exception: {0}", e.Message);
            }
            catch (ZeroOrBelowException e) when (e.Message == "Less than zero Employees found")
            {
                Console.WriteLine("Exception: {0}", e.Message);
            }
            catch (ArgumentException e)
            {
                Console.WriteLine("Exception: {0}", e.Message);
            }
            finally
            {
                Console.WriteLine("Finally block");
            }
            Console.ReadKey();
        }
    }
}
