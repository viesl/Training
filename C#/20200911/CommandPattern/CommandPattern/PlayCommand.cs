using System;
using System.Collections.Generic;
using System.Text;

namespace CommandPattern
{
    class PlayCommand : ICommand
    {
        public PlayCommand()
        {
        }
        public void Execute()
        {
            Console.WriteLine("Play executed.");
        }
    }
}
