import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GroupedProductsComponent } from './groupedproducts/groupedproducts.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './productdetail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupedProductsComponent,
    ProductsComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: GroupedProductsComponent, pathMatch: 'full' },
      { path: 'groupedproducts', component: GroupedProductsComponent },
      { path: 'products/:name', component: ProductsComponent },
      { path: 'product/:id', component: ProductDetailComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
