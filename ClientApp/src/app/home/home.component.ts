import { Component, Inject, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public products: any[];

  constructor(private prodSvc: ProductService, private router: Router) {
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.prodSvc.getAll().subscribe(result => {
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
