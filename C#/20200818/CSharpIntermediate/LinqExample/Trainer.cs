using System;
using System.Collections.Generic;
using System.Text;

namespace LinqExample
{
    public class Trainer
    {
        public int trainerId { get; set; }
        public string trainerName { get; set; }
        public string traienrLocation { get; set; }
        public List<string> technologies { get; set; }

        public static List<Trainer> GetTrainerDetails()
        {
            List<Trainer> trainer = new List<Trainer>();



            trainer.Add(new Trainer
            {
                trainerId = 1,
                trainerName = "Poorva",
                traienrLocation = "Pune",
                technologies = new List<string> { "C", "C++", "Java", "WPF" }
            });
            trainer.Add(new Trainer
            {
                trainerId = 2,
                trainerName = "Tushar",
                traienrLocation = "Mumbai",
                technologies = new List<string> { "C#", "ASP.NET", "C", "WPF" }
            });
            trainer.Add(new Trainer
            {
                trainerId = 3,
                trainerName = "Heda",
                traienrLocation = "Delhi",
                technologies = new List<string> { "ETL", "C#" }
            });




            return trainer;
        }
    }
}
