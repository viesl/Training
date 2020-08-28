using System;
using System.Collections.Generic;

namespace SortedDictionary
{
    class Program
    {
        static void Main(string[] args)
        {
            SortedDictionary<string, string> countries =
                new SortedDictionary<string, string>();

            countries.Add("AU", "Australia");
            countries.Add("LT", "Lithuania");
            countries.Add("DE", "Germany");
            countries.Add("FR", "France");

            try
            {
                countries.Add("AU", "Australia");
            }
            catch (ArgumentException)
            {
                Console.WriteLine("An element with Key = \"AU\" already exists.");
            }

            Console.WriteLine("For key = \"FR\", value = {0}.",
                countries["FR"]);

            countries["FR"] = "La France";
            Console.WriteLine("For key = \"FR\", value = {0}.",
                countries["FR"]);

            countries["DK"] = "Denmark";


            try
            {
                Console.WriteLine("For key = \"UK\", value = {0}.",
                    countries["UK"]);
            }
            catch (KeyNotFoundException)
            {
                Console.WriteLine("Key = \"UK\" is not found.");
            }


            string value = "";
            if (countries.TryGetValue("UK", out value))
            {
                Console.WriteLine("For key = \"UK\", value = {0}.", value);
            }
            else
            {
                Console.WriteLine("Key = \"UK\" is not found.");
            }

            if (!countries.ContainsKey("LV"))
            {
                countries.Add("LV", "Latvia");
                Console.WriteLine("Value added for key = \"LV\": {0}",
                    countries["LV"]);
            }

            Console.WriteLine();
            foreach (KeyValuePair<string, string> kvp in countries)
            {
                Console.WriteLine("Key = {0}, Value = {1}",
                    kvp.Key, kvp.Value);
            }

            SortedDictionary<string, string>.ValueCollection valueColl =
                countries.Values;

            Console.WriteLine();
            foreach (string s in valueColl)
            {
                Console.WriteLine("Value = {0}", s);
            }

            SortedDictionary<string, string>.KeyCollection keyColl =
                countries.Keys;

            Console.WriteLine();
            foreach (string s in keyColl)
            {
                Console.WriteLine("Key = {0}", s);
            }

            Console.WriteLine("\nRemove(\"DK\")");
            countries.Remove("DK");

            if (!countries.ContainsKey("DK"))
            {
                Console.WriteLine("Key \"DK\" is not found.");
            }
        }
    }
}
