using System;
using System.Collections.Generic;
using System.Text;

namespace LiskovExample
{
    class ElectricTool : Tool
    {
        public void Charge()
        {
            Console.WriteLine("Charging");
        }
    }
}
