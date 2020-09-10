using System;
using System.Collections.Generic;
using System.Text;

namespace BIggerLiskovExample
{
    public interface IManager : IEmployee
    {
        void MakePerformanceReview();
    }
}
