﻿using System;

namespace SingletonPattern
{
    class Program
    {
        static void Main(string[] args)
        {
            Singleton s1 = Singleton.GetInstance();
            Singleton s2 = Singleton.GetInstance();

            if (s1 == s2)
            {
                Console.WriteLine("Singleton works.");
            }
            else
            {
                Console.WriteLine("Singleton failed.");
            }
        }
    }
}
