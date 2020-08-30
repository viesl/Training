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

            //Structs
            Complex val1 = new Complex(7, 1);
            Complex val2 = new Complex(2, 6);
            Complex res = val1 + val2;
            Console.WriteLine("First: {0}", val1);
            Console.WriteLine("Second: {0}", val2);
            Console.WriteLine("Result (Sum): {0}", res);


            //Enums
            Season season = Season.Autumn;
            switch (season)
            {
                case Season.Spring:
                    break;
                case Season.Summer:
                    break;
                case Season.Autumn:
                    break;
                case Season.Winter:
                    break;
                default:
                    break;
            }


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

    public struct Complex
    {
        public int real;
        public int imaginary;
        public Complex(int real, int imaginary)
        {
            this.real = real;
            this.imaginary = imaginary;
        }
        public static Complex operator +(Complex one, Complex two)
        {
            return new Complex(one.real + two.real, one.imaginary + two.imaginary);
        }
        public override string ToString()
        {
            return (String.Format("{0} + {1}i", real, imaginary));
        }
    }
    
}
enum Season
{
    Spring,
    Summer,
    Autumn,
    Winter
}