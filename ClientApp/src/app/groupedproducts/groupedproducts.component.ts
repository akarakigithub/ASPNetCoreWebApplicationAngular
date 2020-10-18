import { Component, Inject, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groupedproducts',
  templateUrl: './groupedproducts.component.html',
  styleUrls: ['./groupedproducts.component.css']
})
export class GroupedProductsComponent implements OnInit {

  public products: any[];

  constructor(private prodSvc: ProductService, private router: Router) {
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.prodSvc.getAllGroupedMaxPrice().subscribe(result => {
      this.products = result;
    }, error => console.error(error));
  }

  editProduct(product) {
    this.router.navigate(['/products', product.name]);
  }
}
