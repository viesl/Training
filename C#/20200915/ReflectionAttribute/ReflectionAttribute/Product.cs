using System;
using System.Collections.Generic;
using System.Text;

namespace ReflectionAttribute
{
    class Product
    {
        [ColumnNames(Values = new string[] { "ProductId" })]
        public int Id { get; set; }

        [ColumnNames(Values = new string[] { "ProductName" })]
        public string Name { get; set; }
    }
}
