using System;

namespace CSharpIntermediate
{
    class Program
    {
        static void Main()
        {
            string input;
            Bank b = new Bank();
            IdGenerator idGen = new IdGenerator();
            DateOfBirth dob = new DateOfBirth();
            string accountId;
            bool val = true;

            Console.WriteLine("Welcome to Bank Management System");
            while (true)
            {
                Console.WriteLine("\r\nHow We Can Help You?");
                Console.WriteLine("1. Create Account");
                Console.WriteLine("2. Show Account Information");
                Console.WriteLine("3. Deposit Amount");
                Console.WriteLine("4. WithDraw Amount");
                Console.WriteLine("5. Clear Screen");
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
                            Console.WriteLine("Enter Date Of Birth");
                            d = Convert.ToInt32(Console.ReadLine());
                            m = Convert.ToInt32(Console.ReadLine());
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
                        Console.WriteLine("Enter Account Id");
                        b.ShowAccountDetails();
                        break;
                    case "3":
                        Console.WriteLine("Enter Account Id");
                        b.Deposit();
                        break;
                    default:
                        break;
                }
            }
        }
    }
}
