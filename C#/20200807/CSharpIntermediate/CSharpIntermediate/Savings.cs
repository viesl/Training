using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpIntermediate
{
    class Savings : Account
    {
        public Savings(string accountId, string name, double balance, DateOfBirth dob) : base(accountId, name, balance, dob)
        {

        }

        public override bool Deposit(double amount)
        {
            balance += amount;
            Console.WriteLine($"Your Account balance is {balance}");
            return true;
        }

        public override bool WithDraw(double amount)
        {
            balance -= amount;
            Console.WriteLine($"Your Account balance is {balance}");
            return true;
        }

    }
}
