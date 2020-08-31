using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;

namespace XMLExample
{
    class Program
    {
        static void Main(string[] args)
        {
            XElement contacts =
                new XElement("Contacts",
                    new XElement("Contact",
                        new XElement("Name", "Patrick Hines"),
                        new XElement("phone", "206-555-0144",
                            new XAttribute("Type", "Home")),
                        new XElement("phone", "425-555-0145",
                            new XAttribute("Type", "Work")),
                        new XElement("Address",
                            new XElement("Street1", "123 Main St"),
                            new XElement("City", "Mercer Island"),
                            new XElement("State", "WA"),
                            new XElement("Postal", "68042")
                        )
                    ),
                    new XElement("Contact",
                        new XElement("Name", "John Smith"),
                        new XElement("phone", "206-555-0144",
                            new XAttribute("Type", "Home")),
                        new XElement("phone", "425-555-0145",
                            new XAttribute("Type", "Work")),
                        new XElement("Address",
                            new XElement("Street1", "456 Secondary St"),
                            new XElement("City", "Malibu"),
                            new XElement("State", "LA"),
                            new XElement("Postal", "11111")
                        )
                    )
                );

            IEnumerable<XElement> info =
                from el in contacts.Elements("Contact")
                where (string)el.Element("Name") == "Patrick Hines"
                select el;

            foreach (XElement el in info)
                Console.WriteLine(el);

            Console.WriteLine();

            IEnumerable<XElement> info1 =
                from el in info.Elements("phone")
                where (string)el.Attribute("Type") == "Home"
                select el;
            foreach (XElement el in info1)
                Console.WriteLine(el);
        }
    }
}
