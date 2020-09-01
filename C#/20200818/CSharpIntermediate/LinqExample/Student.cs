using System;
using System.Collections.Generic;
using System.Text;



namespace LinqExample
{
    public class Student
    {
        public int studentId;
        public string name;
        public int? totalMarks;
        public List<Subject> subjects;
        public static List<Student> GetStudents()
        {
            List<Student> student1 = new List<Student>();
            student1.Add(new Student
            {
                studentId = 101,
                name = "Preety",
                totalMarks = 255,
                subjects = new List<Subject>()
                    {
                        new Subject(){subjectName = "Math", marks = 80},
                        new Subject(){subjectName = "Science", marks = 90},
                        new Subject(){subjectName = "English", marks = 95}
                    }
            });
            student1.Add(new Student
            {
                studentId = 102,
                name = "Sambit",
                totalMarks = 275,
                subjects = new List<Subject>()
                {
                        new Subject(){subjectName = "Math", marks = 90},
                        new Subject(){subjectName = "Science", marks = 95},
                        new Subject(){subjectName = "English", marks = 93}
                }
            });




            student1.Add(new Student
            {
                studentId = 103,
                name = "Hina",
                totalMarks = 240,
                subjects = new List<Subject>()
                    {
                        new Subject(){subjectName = "Math", marks = 70},
                        new Subject(){subjectName = "Science", marks = 80},
                        new Subject(){subjectName = "English", marks = 90}
                    }
            });
            student1.Add(new Student
            {
                studentId = 104,
                name = "Anurag",
                totalMarks = 278,
                subjects = new List<Subject>()
                    {
                        new Subject(){subjectName = "Math", marks = 90},
                        new Subject(){subjectName = "Science", marks = 90},
                        new Subject(){subjectName = "English", marks = 95}
                    }
            });
            student1.Add(new Student
            {
                studentId = 105,
                name = "Pranaya",
                totalMarks = 265,
                subjects = new List<Subject>()
                    {
                        new Subject(){subjectName = "Math", marks = 80},
                        new Subject(){subjectName = "Science", marks = 90},
                        new Subject(){subjectName = "English", marks = 85}
                    }
            });
            student1.Add(new Student
            {
                studentId = 106,
                name = "Santosh",
                totalMarks = 263,
                subjects = new List<Subject>()
                    {
                        new Subject(){subjectName = "Math", marks = 86},
                        new Subject(){subjectName = "Science", marks = 70},
                        new Subject(){subjectName = "English", marks = 95}
                    }
            });



            return student1;
        }



        public static List<Student> GetMeritStudent()
        {
            List<Student> student = new List<Student>();
            student.Add(new Student { studentId = 102, name = "Sambit" });
            student.Add(new Student { studentId = 104, name = "Anurag" });
            student.Add(new Student { studentId = 105, name = "Pranaya" });
            return student;
        }
    }



    public class Subject
    {
        public string subjectName;
        public int marks;
    }
}