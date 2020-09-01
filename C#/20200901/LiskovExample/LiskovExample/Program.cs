using System;

namespace LiskovExample
{
    class Program
    {
        static void Main()
        {
            Hammer h = new Hammer();
            h.Work();

            Tool t = new Tool();
            t.Work();

            ElectricTool electricTool = new ElectricTool();
            electricTool.Work();
            electricTool.Charge();

            ElectricDrill electricDrill = new ElectricDrill();
            electricDrill.Work();
            electricDrill.Charge();

        }
    }
}
