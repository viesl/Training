using System.Collections.Generic;
using System.Linq;
using CandyOnlineShopping.Migrations;
using CandyOnlineShopping.Models.Entity;
using CandyOnlineShopping.Models.Services.Interfaces;
using CandyOnlineShopping.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace CandyOnlineShopping.Controllers
{
    public class CandyController : Controller
    {
        private readonly ICandyService _candyService;
        private readonly ICategoryService _categoryService;

        public CandyController(ICandyService candyService, ICategoryService categoryService)
        {
            _candyService = candyService;
            _categoryService = categoryService;
        }

        public IActionResult List(string category)
        {
            IEnumerable<Candy> candies;
            string currentCategory;
            if (string.IsNullOrEmpty(category))
            {
                candies = _candyService.GetAll().OrderBy(c => c.Id);
                currentCategory = "Best Sellers!";
            }
            else
            {
                candies = _candyService.GetAll().Where(c => c.Category.Name == category);
                currentCategory = _categoryService.GetAll().FirstOrDefault(c => c.Name == category).Name;
            }
            return View(new CandyListView { Candies = candies, CurrentCategory = currentCategory });
        }

        public IActionResult Details(int id)
        {
            var candy = _candyService.GetById(id);
            if (candy == null)
            {
                return NotFound();
            }
            return View(candy);
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(Candy candy)
        {
            if (!ModelState.IsValid)
            {
                return View(candy);
            }

            _candyService.Create(candy);

            return RedirectToAction("List");
        }

        [HttpGet]
        public IActionResult Delete(int id)
        {
            Candy candy = _candyService.GetById(id);
            return View(candy);
        }

        [HttpPost, ActionName("Delete")]
        public IActionResult ConfirmDelete(int id)
        {
            _candyService.Delete(id);
            return RedirectToAction("List");
        }
    }
}