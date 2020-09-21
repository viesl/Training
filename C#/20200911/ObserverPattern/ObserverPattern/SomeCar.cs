using System;
using System.Collections.Generic;
using System.Text;

namespace ObserverPattern
{
    public class SomeCar : ICarObserverManager
    {
        public int EngineState { get; set; }

        private List<IObserver> _observers = new List<IObserver>();

        public SomeCar(int engineState)
        {
            EngineState = engineState;
        }

        public void AddObserver(IObserver observer)
        {
            Console.WriteLine("Added an observer.");
            this._observers.Add(observer);
        }

        public void NotifyAll()
        {
            Console.WriteLine("Notifying observers...");

            foreach (var observer in _observers)
            {
                observer.Notify(this);
            }
        }

        public void RemoveObserver(IObserver observer)
        {
            this._observers.Remove(observer);
            Console.WriteLine("Removed an observer.");
        }

        public void StartEngine()
        {
            Console.WriteLine("Starting Engine...");
            EngineState--;
            this.NotifyAll();
        }

        public void PerformBigOperation()
        {
            Console.WriteLine("Performing big operation on Engine...");
            EngineState-=10;
            this.NotifyAll();
        }
    }
}
