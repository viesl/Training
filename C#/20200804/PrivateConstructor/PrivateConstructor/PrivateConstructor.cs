using System;
using System.Collections.Generic;
using System.Text;

namespace PrivateConstructor
{
    class PrivateConstructor
    {
        private PrivateConstructor() { }

        public static string LogMessage { get; } = "PrivateConstructor class log field used.\nCannot instantiate this class.\n";
    }
}
