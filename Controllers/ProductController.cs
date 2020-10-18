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
    public class ProductController : ControllerBase
    {
        ProductRepo _repo;

        public ProductController(ProductRepo repo)
        {
            this._repo = repo;
        }

        // GET: api/Product
        [HttpGet("GetAllByName")]
        public IEnumerable<Product> GetAllByName(string productName)
        {
            return this._repo.GetAllByName(productName);
        }

        // GET: api/Product/5
        [HttpGet("Get")]
        public Product Get(string id)
        {
            return this._repo.Get(id);
        }

        // POST: api/Product
        [HttpPost("add")]
        public void Post([FromBody] Product value)
        {
            this._repo.Create(value);
        }

        // PUT: api/Product/5
        [HttpPut("update")]
        public void Put(string id, [FromBody] Product value)
        {
            this._repo.Update(id, value);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("delete")]
        public void Delete(string id)
        {
            this._repo.Delete(id);
        }
    }
}
