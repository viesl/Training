using System;
using System.Collections.Generic;
using System.Text;

namespace BIggerLiskovExample
{
    public class Director : BaseEmployee, IManager
    {
        public override void CalculatePerHourRate(int rank)
        {
            decimal baseAmount = 150M;

            Salary = baseAmount * rank;
        }

        public void MakePerformanceReview()
        {
            Console.WriteLine("I'm reviewing a direct report's performance.");
        }

        public void FireSomeone()
        {
            Console.WriteLine("You're Fired!");
        }
    }
}
