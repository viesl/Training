using System;
using System.Collections.Generic;
using System.Text;

namespace CommandPattern
{
    class Player
    {
        public Player()
        {
        }
        public void Invoke(ICommand cmd)
        {
            Console.WriteLine("Invoking.......");
            cmd.Execute();
        }
    }
}
