import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service'
import { Subscription } from 'rxjs/Subscription'
import { Product } from './../../model/product'

@Component({
  selector: 'products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private subscription : Subscription;
  private products : Product[] = [];
  private isLoading : boolean = true;
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    /*this.subscription = this._productService
                            .getAllProducts()
                            .subscribe(
                               products => this.products = products,
                               error => console.log(error),
                               () => this.isLoading = false
                            );*/
  }

}
