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
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return this._repo.GetAll();
        }

        // GET: api/Product/5
        [HttpGet("{id}", Name = "Get")]
        public Product Get(string id)
        {
            return this._repo.Get(id);
        }

        // POST: api/Product
        [HttpPost]
        public void Post([FromBody] Product value)
        {
            this._repo.Create(value);
        }

        // PUT: api/Product/5
        [HttpPut("{id}")]
        public void Put(string id, [FromBody] Product value)
        {
            this._repo.Update(id, value);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            this._repo.Delete(id);
        }
    }
}
