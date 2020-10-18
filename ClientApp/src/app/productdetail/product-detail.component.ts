import { Component, Inject, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {

  public products: any[];

  constructor(private prodSvc: ProductService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }
}
