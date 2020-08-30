using System;
using System.Collections.Generic;
using System.Text;

namespace ExceptionExample
{
    class ZeroOrBelowException : Exception
    {
        public ZeroOrBelowException(string message) : base(message)
        {
        }
    }
}
