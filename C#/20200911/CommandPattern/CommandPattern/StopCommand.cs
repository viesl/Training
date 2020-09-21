using System;
using System.Collections.Generic;
using System.Text;

namespace CommandPattern
{
    class StopCommand : ICommand
    {
        public StopCommand()
        {
        }

        public void Execute()
        {
            Console.WriteLine("Stop executed.");
        }
    }
}
