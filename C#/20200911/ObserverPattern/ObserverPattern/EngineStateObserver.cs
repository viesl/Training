using System;
using System.Collections.Generic;
using System.Text;

namespace ObserverPattern
{
    class EngineStateObserver : IObserver
    {
        public void Notify(ICarObserverManager carObserverManager)
        {
            if ((carObserverManager as SomeCar).EngineState < 50)
            {
                Console.WriteLine($"EngineStateObserver: Engine state has decreased. Engine state: {(carObserverManager as SomeCar).EngineState}.");
            }
        }
    }
}
