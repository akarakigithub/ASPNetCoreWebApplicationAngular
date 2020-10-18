import { Component, Inject, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-productdetail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private productId: string;
  public productName: string;
  public price: string;

  constructor(private prodSvc: ProductService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.productId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    if (this.productId) {
      this.prodSvc.get(this.productId).subscribe(result => {
        this.productName = result.name;
        this.price = result.price.toString();
      }, error => console.error(error));
    }
  }

  save() {
    let body = {
      id: this.productId, name: this.productName, price: parseFloat(this.price)
    };
    if (this.productId) {
      this.prodSvc.update(this.productId, body).subscribe(result => {
        this.router.navigate(['/products', this.productName]);
      }, error => console.error(error));
    } else {
      this.prodSvc.add(body).subscribe(result => {
        this.router.navigate(['/products', this.productName]);
      }, error => console.error(error));
    }
  }
}
