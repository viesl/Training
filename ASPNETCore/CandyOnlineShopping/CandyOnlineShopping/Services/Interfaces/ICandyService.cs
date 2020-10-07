﻿using CandyOnlineShopping.Models.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CandyOnlineShopping.Models.Services.Interfaces
{
    public interface ICandyService
    {
        IEnumerable<Candy> GetAll();
        IEnumerable<Candy> GetOnSale();
        Candy GetById(int Id);
        void Create(Candy candy);
        void Delete(int id);
    }
}
