import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { Cart } from "../../model/cart";
import { ProductService } from "../../services/product.service";
import { Product } from "../../model/product";
import { User } from "../../model/user";
import { Wallet } from "../../model/wallet";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  private loginStatus : boolean = false;
  private cart:Cart;
  private user : User;
  private wallet : Wallet;
  constructor(private userService:UserService, private productService :ProductService) {

    this.userService.getLoginStatus()
    .subscribe(
      loginStatus => this.loginStatus = loginStatus
    );

    this.productService.getCart()
    .subscribe(
      cart => this.cart = cart
    );

    this.userService.getUser()
    .subscribe(
      user => {
        this.user = user;
      }
    );
    this.userService.getWallet()
    .subscribe(
      wallet => this.wallet = wallet
    );

  }

  ngOnInit() {


  }

  public removeProduct(product:Product):void{
    this.productService.removeProduct(product);
  }

  public checkOut(){
    if(this.wallet.getCredit() > this.cart.calculateSome()){
      var products = [];
      for(var p of Array.from(this.cart.getProducts().values())){
          products.push(p.id);
      }
      this.userService.checkOut(this.user, products, this.cart.calculateSome());
      this.cart.purgeCart();
      alert("La transaction à été faite avec succes");
      location.reload();

    }else{
      alert("SVP recharger votre wallet");
    }
  }
}
