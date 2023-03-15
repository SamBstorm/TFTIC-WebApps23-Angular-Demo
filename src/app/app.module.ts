import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './Main/Components/main-header/main-header.component';
import { MainContent01Component } from './Main/Components/main-content01/main-content01.component';
import { MainContent02Component } from './Main/Components/main-content02/main-content02.component';
import { ProductListComponent } from './Product/Components/product-list/product-list.component';
import { ProductAddComponent } from './Product/Components/product-add/product-add.component';
import { ProductEditComponent } from './Product/Components/product-edit/product-edit.component';
import { ProductRemoveComponent } from './Product/Components/product-remove/product-remove.component';
import { ProductDetailsComponent } from './Product/Components/product-details/product-details.component';
import { ProductMainComponent } from './Product/Components/product-main/product-main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainContent01Component,
    MainContent02Component,
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductRemoveComponent,
    ProductDetailsComponent,
    ProductMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
