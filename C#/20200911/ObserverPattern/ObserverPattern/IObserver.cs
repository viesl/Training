using System;
using System.Collections.Generic;
using System.Text;

namespace ObserverPattern
{
    public interface IObserver
    {
        // Receive update from subject
        public void Notify(ICarObserverManager carObserverManager);
    }
}
