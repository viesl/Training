using System;

namespace CSharpIntermediate
{
    class Program
    {
        static void Main()
        {
            Bank b = new Bank();
            IdGenerator idGen = new IdGenerator();
            DateOfBirth dob = new DateOfBirth();
            string accountId, input;
            bool val = true, cycleFlag = true;
            double depositAmount, withdrawAmount;
            Account account;
            

            Console.WriteLine("Welcome to Bank Management System");
            while (cycleFlag)
            {
                Console.WriteLine("\r\nHow We Can Help You?");
                Console.WriteLine("1. Create Account");
                Console.WriteLine("2. Show Account Information");
                Console.WriteLine("3. Deposit Amount");
                Console.WriteLine("4. WithDraw Amount");
                Console.WriteLine("5. Exit");
                input = Console.ReadLine();
                switch (input)
                {
                    case "1":
                        int d, y, m;
                        string name;
                        string accountType;
                        int accountTypeNumber;
                        double balance;
                        Console.WriteLine("Enter Account Type");
                        Console.WriteLine("1. Savings");
                        Console.WriteLine("2. Current");
                        accountTypeNumber = Int32.Parse(Console.ReadLine());
                        if (accountTypeNumber == 1)
                            accountType = "Savings";
                        else
                            accountType = "Current";
                        Console.WriteLine("Enter Your Name");
                        name = Console.ReadLine();
                        while (val == true)
                        {
                            Console.WriteLine("Enter Date Of Birth.");
                            Console.Write("Day: ");
                            d = Convert.ToInt32(Console.ReadLine());
                            Console.Write("Month: ");
                            m = Convert.ToInt32(Console.ReadLine());
                            Console.Write("Years: ");
                            y = Convert.ToInt32(Console.ReadLine());

                            dob.AssignValue(d, m, y);
                            if (dob.DisplayDate() == true)
                            {
                                val = false;
                            }
                            else
                            {
                                val = true;
                            }
                        }
                        val = true;

                        Console.WriteLine("Enter The Balance");
                        balance = Convert.ToDouble(Console.ReadLine());
                        Console.WriteLine("Account Created Successfully");
                        accountId = idGen.GenerateId();
                        accountId = String.Concat("EMI", accountId);
                        Console.WriteLine($"Your Account Number is {accountId}");
                        b.CreateAccount(accountId, name, accountType, balance, dob);
                        break;
                    case "2":
                        ShowAllAccounts(b);
                        Console.Write("Enter account id: ");
                        accountId = Console.ReadLine();
                        try
                        {
                            account = b.GetAccount(accountId);
                            Console.WriteLine($"Account Id: {account.Id}");
                            Console.WriteLine($"Customer Name: {account.customerName}");
                            Console.WriteLine($"Date Of Birth: {account.dob.dateOfBirth}");
                            Console.WriteLine($"Account balance: {account.balance}");
                            Console.WriteLine($"Account type: {account.GetType().Name}");
                        }
                        catch(Exception e)
                        {
                            Console.WriteLine(e.Message);
                        }
                        break;
                    case "3":
                        ShowAllAccounts(b);
                        Console.Write("Enter Account Id: ");
                        accountId = Console.ReadLine();
                        account = b.GetAccount(accountId);
                        Console.WriteLine($"Your Balance: {account.balance}");
                        Console.Write("Enter the Amount You Want to Deposit: ");
                        depositAmount = Convert.ToDouble(Console.ReadLine());
                        b.Deposit(account, depositAmount);
                        Console.WriteLine($"Your Balance: {account.balance}");
                        break;
                    case "4":
                        ShowAllAccounts(b);
                        Console.Write("Enter Account Id: ");
                        accountId = Console.ReadLine();
                        account = b.GetAccount(accountId);
                        Console.WriteLine($"Your Balance: {account.balance}");
                        Console.Write("Enter the Amount You Want to withdraw: ");
                        withdrawAmount = Convert.ToDouble(Console.ReadLine());
                        b.Withdraw(account, withdrawAmount);
                        Console.WriteLine($"Your Balance: {account.balance}");
                        break;
                    case "5":
                        cycleFlag = false;
                        break;
                    default:
                        break;
                }
            }
        }

        static void ShowAllAccounts(Bank b)
        {
            Console.WriteLine("Choose Account");
            foreach (string id in b.GetAccounts())
            {
                Console.WriteLine(id);
            }
        }
    }
}
