using System;
using System.Collections.Generic;
using System.Text;

namespace PrivateConstructor
{
    class PrivateConstructor
    {
        private PrivateConstructor() { }

        public PrivateConstructor(string message) {
            logMessage = message;
        }

        private PrivateConstructor(string message, int a)
        {
            logMessage = message;
            test = a;

        }

        public static int test;
        public static string logMessage = "PrivateConstructor class log field used.\nCannot instantiate this class with empty constructor.\n";

        public static PrivateConstructor GetPrivateConstructorObjectFromPrivateConstructor(string message, int number)
        {
            return new PrivateConstructor(message, number);
        }
    }
}
