using System;

namespace ObserverPattern
{
    class Program
    {
        static void Main(string[] args)
        {
            var car = new SomeCar(51);
            var observer1 = new EngineStateObserver();
            car.AddObserver(observer1);

            var observer2 = new BrokenEngineObserver();
            car.AddObserver(observer2);

            car.StartEngine();
            car.PerformBigOperation();
            car.PerformBigOperation();
            car.PerformBigOperation();
            car.PerformBigOperation();

            car.RemoveObserver(observer2);

        }
    }
}
