using System;
using System.Collections.Generic;
using System.Text;

namespace ObserverPattern
{
    class BrokenEngineObserver : IObserver
    {
        public void Notify(ICarObserverManager carObserverManager)
        {

            if ((carObserverManager as SomeCar).EngineState < 20)
            {
                Console.WriteLine($"BrokenEngineObserver: Engine is in bad state. It is unusable and needs fixing. Engine state: {(carObserverManager as SomeCar).EngineState}.");
            }
        }
    }
}
