using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpIntermediate
{
    abstract class Account
    {
        public string Id;
        public string customerName;
        public DateOfBirth dob;
        public double balance;
        public abstract bool Deposit(double amount);
        public abstract bool WithDraw(double amount);

        public Account(string id, string name, double balance, DateOfBirth dateOfBirth)
        {
            this.Id = id;
            this.customerName = name;
            this.dob = dateOfBirth;
            this.balance = balance;
        }

        public void DisplayAccountDetails()
        {
            Console.WriteLine($"Customer Name {customerName}");
            Console.WriteLine($"Customer DOB {dob}");
            Console.WriteLine($"Balance {balance}");
        }
    }
}
