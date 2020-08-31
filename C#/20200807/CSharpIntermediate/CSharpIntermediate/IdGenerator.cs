using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpIntermediate
{
    class IdGenerator
    {
        static int id = 0;
        string storeId;

        public string GenerateId()
        {
            string gid = DateTime.Now.ToString("yyyy-MM");
            storeId = gid + ++id;
            return storeId;
        }
    }
}
