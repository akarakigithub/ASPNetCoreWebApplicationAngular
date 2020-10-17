using ASPNetCoreWebApplicationAngular.Model;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ASPNetCoreWebApplicationAngular.Repository
{
    public class ProductRepo
    {
        private List<Product>_products = new List<Product>();

        public ProductRepo()
        {
            try
            {
                IEnumerable<string> items = File.ReadLines("items.txt");
                int lineIndex = 0;
                foreach(string item in items)
                {
                    if(lineIndex>0)
                    {
                        string[] itemTokens = item.Split(",");
                        if(itemTokens!=null && itemTokens.Length>0)
                        {
                            Product newProduct = new Product();
                            newProduct.Id = itemTokens[0];
                            if (itemTokens.Length>1)
                                newProduct.Name = itemTokens[1];
                            if (itemTokens.Length > 2)
                                newProduct.Price = Convert.ToDouble(itemTokens[2]);
                            _products.Add(newProduct);
                        }
                    }
                    lineIndex++;
                }
            }
            catch(Exception ex) { }
        }

        public bool Create(Product product)
        {
            return false;
        }

        public bool Delete(string id)
        {
            return false;
        }

        public Product Get(string id)
        {
            Product matches = _products.Find(p=>p.Id == id);
            return matches;
        }

        public IEnumerable<Product> GetAll()
        {
            return _products;
        }

        public bool Update(string id, Product product)
        {
            return false;
        }
    }
}
