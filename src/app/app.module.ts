import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
 
  BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    ProductsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
