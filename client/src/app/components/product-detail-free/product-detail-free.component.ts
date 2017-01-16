import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { Product } from "../../model/product";
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-product-detail-free',
  templateUrl: './product-detail-free.component.html',
  styleUrls: ['./product-detail-free.component.css']
})
export class ProductDetailFreeComponent implements OnInit {

  private loginStatus :boolean ;
  private activeProduct : Product;
  constructor(private userService:UserService, private productService:ProductService) {
      this.userService.getActiveProduct().subscribe(product => this.activeProduct = product);
      this.userService.getLoginStatus()
       .subscribe(
          loginStatus => { this.loginStatus = loginStatus; console.log(this.loginStatus);  }
       )
  }

  ngOnInit() {
  }

  public addProductToCart(product:Product):void{
    this.productService.addProduct(product);
  }
}
