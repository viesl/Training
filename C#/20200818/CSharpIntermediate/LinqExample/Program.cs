using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Reflection;
using System.Security.Cryptography;

namespace LinqExample
{
    class Program
    {
        static void Main(string[] args)
        {
            //Fetch StudentName who are not part of Merit List. 
            Console.WriteLine("Fetch StudentName who are not part of Merit List.");
            var students = Student.GetStudents().Where(p => !Student.GetMeritStudent().Any(p2 => p2.name == p.name));
            foreach (Student student in students)
            {
                Console.Write(student.name);
                Console.WriteLine();
            }
            Console.WriteLine();

            //Fetch StudentDetails which are part of Student1 Object and Not Student Object. 
            Console.WriteLine("Fetch StudentDetails which are part of Student1 Object and Not Student Object. ");

            var student1Object = Student.GetStudents().First();
            var studentObject = Student.GetMeritStudent().First();

            var student1Fields = studentObject.GetType().GetFields(
                                    BindingFlags.Instance |
                                    BindingFlags.Static |
                                    BindingFlags.Public |
                                    BindingFlags.NonPublic)
                                    .Select(x => x.Name);

            var studentFields = studentObject.GetType().GetFields(
                                    BindingFlags.Instance |
                                    BindingFlags.Static |
                                    BindingFlags.Public |
                                    BindingFlags.NonPublic)
                                    .Select(x => new { field = x.Name, value = x.GetValue(studentObject) })
                                    .Where(x => x.value != null )
                                    .Select(x => x.field)
                                    .ToList();

            var result = student1Fields.Except(studentFields);

            foreach (var item in result)
            {
                Console.WriteLine(item);
            }

            //Fetch Record of Students Whose Total marks > 265. 
            Console.WriteLine("\nFetch Record of Students Whose Total marks > 265.");
            var result3 = Student.GetStudents().Where(x => x.totalMarks > 265);
            foreach (var student in result3)
            {
                Console.WriteLine(student.name);
            }

            //Fetch Student Record whose marks in each Subject > 80

            Console.WriteLine("\nFetch Student Record whose marks in each Subject > 80");
            var result4 = from student in Student.GetStudents()
                          where student.subjects.All(m => m.marks > 80)
                          select student.name;


            foreach (var name in result4)
            {
                Console.WriteLine(name);
            }
        }
    }
}
