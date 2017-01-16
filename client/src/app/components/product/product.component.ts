import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service'
import { Subscription } from 'rxjs/Subscription'
import { Product } from './../../model/product'
import { UserService } from "../../services/user.service";
import { User } from "../../model/user";

@Component({
  selector: 'products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products;
  private isLoading : boolean = true;
  private loginStatus :boolean ;
  private user : User;
  constructor(private productService: ProductService, private userService:UserService) { }

  ngOnInit() {

     this.productService.getAllProducts()
                            .subscribe(
                               products => this.products = products ,
                               error => console.log(error),
                               () => this.isLoading = false
                            );
     this.userService.getLoginStatus()
       .subscribe(
          loginStatus => this.loginStatus = loginStatus
       )
     this.userService.getUser()
       .subscribe(
          user => this.user = user
       )
  }

  public addProductToCart(product:Product):void{
    if(this.user.products.indexOf(product.id) < 0){
      this.productService.addProduct(product);
    }else{
      alert("Vous avez acheté déja cet article");
    }

  }

  public setActiveProduct(product:Product){
    this.userService.setActiveProduct(product);
  }
}
