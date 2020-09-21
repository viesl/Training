using System;

namespace CommandPattern
{
    class Program
    {
        static void Main(string[] args)
        {

            Player player = new Player();
            PlayCommand PlayCommand = new PlayCommand();
            player.Invoke(PlayCommand);
            StopCommand dvdStopCommand = new StopCommand();
            player.Invoke(dvdStopCommand);
            
        }
    }
}
