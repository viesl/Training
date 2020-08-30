using System;

namespace CSFeatures
{
    class Program
    {
        static void Main(string[] args)
        {
            //Output param
            Program.OutMethod(out int a);
            Console.WriteLine(a);

            //pattern matching
            Console.WriteLine(GetVehicleGreeting(new Truck()));

            //Deconstruction/Discards
            var tuple = (1, 1, 2, 3, 5, 8);
            (_, _, _, _, var fifth, _) = tuple;
            Console.WriteLine(fifth);

            //Binary Literals
            int twenty = 0b10100;
            Console.WriteLine(twenty);

            //Digit Separator 
            const int number = 1_122_339;
            Console.WriteLine(number);

            //Expression-bodied members - check the method
            Program.OutMethod(out int b);


            Console.ReadLine();
        }

        static void OutMethod(out int i) => i = 5;

        public static string GetVehicleGreeting(object vehicle)
        {
            switch (vehicle)
            {
                case Motorcycle m:
                    return m.getGreeting();
                case Truck t:
                    return t.getGreeting();
                case SUV s:
                    return s.getGreeting();
                case BUS b:
                    return b.getGreeting();
                default:
                    throw new ArgumentException(
                          "unsupported vehicle type",
                          nameof(vehicle));
            }
        }
    }

    public class Motorcycle
    {
        public string getGreeting() => "I'm a Motorcycle";
    }
    public class Truck
    {
        public string getGreeting() => "I'm a truck";
    }
    public class SUV
    {
        public string getGreeting() => "I'm an SUV";
    }
    public class BUS
    {
        //class related logic goes here
        public string getGreeting() => "I'm a Bus";
    }
}
