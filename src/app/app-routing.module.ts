import { ProductAddComponent } from './Product/Components/product-add/product-add.component';
import { ProductMainComponent } from './Product/Components/product-main/product-main.component';
import { MainContent01Component } from './Main/Components/main-content01/main-content01.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContent02Component } from './Main/Components/main-content02/main-content02.component';
import { ProductEditComponent } from './Product/Components/product-edit/product-edit.component';
import { ProductListComponent } from './Product/Components/product-list/product-list.component';
import { ProductDetailsComponent } from './Product/Components/product-details/product-details.component';
import { ProductRemoveComponent } from './Product/Components/product-remove/product-remove.component';

const routes: Routes = [
  {path:"content1", component : MainContent01Component},
  {path:"content2", component : MainContent02Component},
  {path:'produit', component: ProductMainComponent, children:[
    {path:'add', component:ProductAddComponent},
    {path:'edit', component:ProductEditComponent},
    {path:'list', component:ProductListComponent},
    {path:'remove', component:ProductRemoveComponent},
    {path:'details', component:ProductDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
