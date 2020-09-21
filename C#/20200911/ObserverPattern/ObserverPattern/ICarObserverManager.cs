using System;
using System.Collections.Generic;
using System.Text;

namespace ObserverPattern
{
    public interface ICarObserverManager
    {
        public void AddObserver(IObserver observer);

        public void RemoveObserver(IObserver observer);

        public void NotifyAll();
    }
}
