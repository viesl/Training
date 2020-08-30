using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace RegExExample
{
    class Program
    {
        static void Main(string[] args)
        {
            // Input strings to Match 
            // valid mobile number 
            string[] str = {"9925612824","8238783138", "02812451830"};

            string strRegex = @"(^[0-9]{10}$)|(^\+[0-9]{2}\s+[0-9] 
                {2}[0-9]{8}$)|(^[0-9]{3}-[0-9]{4}-[0-9]{4}$)";

            Regex re = new Regex(strRegex);

            foreach (string s in str)
            {
                Console.WriteLine("{0} {1} a valid mobile number.", s, re.IsMatch(s) ? "is" : "is not");
            }

            String content = @"<p>The <code>Regex</code> is a compiled 
                representation of a regular expression.</p>";

            var rx = new Regex(@"</?[a-z]+>", RegexOptions.Compiled);
            var matches = rx.Matches(content);

            foreach (Match match in matches)
            {
                Console.WriteLine(match);
            }

            Console.ReadKey();
        }

    }
}
