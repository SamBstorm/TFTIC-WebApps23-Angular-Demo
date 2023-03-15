import { IProduct } from './../../../Models/iproduct';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product : IProduct;

  comment? : string = "Ce produit est au top!";
  comment_ready : boolean = false;
  get btn_disabled() : boolean { return !this.comment_ready || !this.comment || this.comment.length < 5; }

  constructor(){
    this.product = {name : 'Carotte', price : 3.99};
    setTimeout(() => this.comment_ready = true, 3000);
  }

  confirm(){
    //Envois en db si possible
    alert('Votre commentaire a été pris en compte!');
    this.comment_ready = false;
    this.comment = undefined;
    setTimeout(() => this.comment_ready = true, 3000);
  }
}
