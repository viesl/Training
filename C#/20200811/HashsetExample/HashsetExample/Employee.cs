using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text;

namespace HashsetExample
{
    public class Employee : IEquatable<Employee>
    {
        public string Account;
        public string Name;

        public Employee(string account, string name)
        {
            this.Account = account;
            this.Name = name;
        }

        public bool Equals(Employee other)
        {
            if (other == null) return false;
            return (this.Account.Equals(other.Account));
        }

        public override int GetHashCode()
        {
            var hashCode = 13;
            var myStrHashCode =
                !string.IsNullOrEmpty(this.Account) ?
                    this.Account.GetHashCode() : 0;
            hashCode = (hashCode * 397) ^ myStrHashCode;
            return hashCode;
        }
    }
}
