using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpIntermediate
{
    class Current : Account
    {
        public double minBalance = 1000000;
        private readonly double dailyWithDraw = 20000;

        public Current(string accountId, string name, double balance, DateOfBirth dob) : base(accountId, name, balance, dob)
        {

        }

        public override bool Deposit(double amountDep)
        {
            balance += amountDep;
            Console.WriteLine($"Your Balance: {balance}");
            return true;
        }

        public override bool WithDraw(double amount)
        {
            if (amount > balance)
            {
                return false;
            }
            else if (amount > dailyWithDraw)
            {
                return false;
            }
            else
            {
                balance -= amount;
                return true;
            }
        }
    }
}
