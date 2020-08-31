using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;

namespace CSharpIntermediate
{
    class Bank
    {
        readonly List<Account> accounts = new List<Account>();

        public double depositAmount;
        public bool depositValue;

        public void CreateAccount(string accountId, string name, string accountType, double balance, DateOfBirth dob)
        {
            Account account;
            if (accountType == "Savings")
            {
                account = new Savings(accountId, name, balance, dob);
            }
            else
            {
                account = new Current(accountId, name, balance, dob);
            }
            accounts.Add(account);
        }

        public void ShowAccountDetails()
        {
            //int indexNum;
            //string accountId = Console.ReadLine();
            //if (custId.Contains(accountId))
            //{
            //    indexNum = Array.IndexOf(custId, id);
            //    Console.WriteLine($"Name: {custName[indexNum]}");
            //    Console.WriteLine($"Id: {custId[indexNum]}");
            //    Console.WriteLine($"Account Type: {accType[indexNum]}");
            //    Console.WriteLine($"Balance: {myBalance[indexNum]}");
            //    Console.WriteLine($"DOB: {myDob[indexNum]}");
            //}
            //else
            //{
            //    Console.WriteLine("Entered Incorrect Account Info");
            //}
        }

        public void Deposit()
        {
            //int indexNum;
            //string inId = Console.ReadLine();
            //if (custId.Contains(inId))
            //{
            //    indexNum = Array.IndexOf(custId, inId);
            //    Console.WriteLine($"Your Balance: {myBalance[indexNum]}");
            //    Console.WriteLine("Enter the Amount You Want to Deposit");
            //    depositAmount = Convert.ToDouble(Console.ReadLine());
            //    if (accType[indexNum] == "Savings")
            //    {
            //        sa.balance = myBalance[indexNum];
            //        sa.Deposit(depositAmount);
            //        myBalance[indexNum] = sa.balance;
            //    }
            //    else
            //    {
            //        Console.WriteLine("Enter Correct Account Id");
            //    }
            //}
        }
    }
}
