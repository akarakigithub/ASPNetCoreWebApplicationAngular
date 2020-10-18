using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASPNetCoreWebApplicationAngular.Model;
using ASPNetCoreWebApplicationAngular.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ASPNetCoreWebApplicationAngular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GroupedProductController : ControllerBase
    {
        ProductRepo _repo;

        public GroupedProductController(ProductRepo repo)
        {
            this._repo = repo;
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return this._repo.GetAllGroupedMaxPrice();
        }
    }
}
