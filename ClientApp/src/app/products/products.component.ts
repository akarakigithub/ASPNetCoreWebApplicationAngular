import { Component, Inject, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private productName: string;
  public products: any[];

  constructor(private prodSvc: ProductService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.productName = this.activatedRoute.snapshot.params.name;
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.prodSvc.getAllByName(this.productName).subscribe(result => {
      this.products = result;
    }, error => console.error(error));
  }

  addProduct() {
    this.router.navigate(['/product','']);
  }

  editProduct(product) {
    this.router.navigate(['/product', product.id]);
  }

  deleteProduct(product) {
    if (confirm('Delete Product?')) {
      this.prodSvc.delete(product.id).subscribe(result => {
        this.loadProducts();
      }, error => console.error(error));
    }
  }
}
