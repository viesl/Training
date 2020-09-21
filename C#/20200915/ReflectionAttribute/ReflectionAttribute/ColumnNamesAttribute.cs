using System;
using System.Collections.Generic;
using System.Text;

namespace ReflectionAttribute
{
    class ColumnNamesAttribute : Attribute
    {
        public string[] Values { get; set; }
    }
}
