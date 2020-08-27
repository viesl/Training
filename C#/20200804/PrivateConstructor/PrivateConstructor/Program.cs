using System;

namespace PrivateConstructor
{
    class Program
    {
        static void Main()
        {
            Console.WriteLine(PrivateConstructor.logMessage);

            PrivateConstructor privateConstructor = new PrivateConstructor("Message changed through public constructor.");

            Console.WriteLine(PrivateConstructor.logMessage);


            PrivateConstructor privateConstructor1 = PrivateConstructor.GetPrivateConstructorObjectFromPrivateConstructor("Message changed through private constructor inside a method in class.",1);

            Console.WriteLine(PrivateConstructor.logMessage);

            Console.ReadLine();
        }
    }
}
