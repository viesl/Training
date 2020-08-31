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

        public string[] GetAccounts()
        {
            return this.accounts.Select(account => account.Id).ToArray();
        }

        public Account GetAccount(string accountId)
        {
            if (this.accounts.Exists(account => account.Id == accountId))
            {
                return this.accounts.Where(account => account.Id == accountId).FirstOrDefault();
            }
            throw new Exception("Account not found.");
        }

        public void Deposit(Account account, double amount)
        {
            account.Deposit(amount);
        }

        public void Withdraw(Account account, double amount)
        {
            account.WithDraw(amount);
        }
    }
}
