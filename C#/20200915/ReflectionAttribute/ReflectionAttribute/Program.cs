using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;

namespace ReflectionAttribute
{
    class Program
    {
        static void Main(string[] args)
        {
            DataTable dt = new DataTable("Product");
            dt.Columns.Add("ProductId", typeof(Int32));
            dt.Columns.Add("ProductName", typeof(string));

            dt.Rows.Add(1, "Milk");
            dt.Rows.Add(2, "Bread");
            dt.Rows.Add(3, "Butter");
            dt.Rows.Add(4, "Cheese");

            List<Product> productDetails = ConvertDataTable<Product>(dt);

            foreach (var item in productDetails)
            {
                Console.WriteLine($"Id: {item.Id}, Name: {item.Name}");
            }

        }

        private static bool NamesMatched(PropertyInfo propertyInfo, string columnName)
        {
            var displayNameAttr = propertyInfo.GetCustomAttributes(false)
                .OfType<ColumnNamesAttribute>().FirstOrDefault();
            return displayNameAttr?.Values.Any(v => v == columnName) ?? false;
        }

        private static List<T> ConvertDataTable<T>(DataTable dt)
        {
            List<T> data = new List<T>();
            foreach (DataRow row in dt.Rows)
            {
                T item = GetItem<T>(row);
                data.Add(item);
            }
            return data;
        }

        private static T GetItem<T>(DataRow dr)
        {
            Type temp = typeof(T);
            T obj = Activator.CreateInstance<T>();

            foreach (DataColumn column in dr.Table.Columns)
            {
                foreach (PropertyInfo pro in temp.GetProperties())
                {
                    var isNameMatched = NamesMatched(pro, column.ColumnName);
                    if (pro.Name == column.ColumnName || isNameMatched)
                        pro.SetValue(obj, dr[column.ColumnName], null);
                    else
                        continue;
                }
            }
            return obj;
        }
    }
}
