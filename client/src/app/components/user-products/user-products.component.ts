import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { Product } from "../../model/product";
import { User } from "../../model/user";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent implements OnInit {
  private products: Product[];
  constructor( private userService:UserService) {
    this.userService.getUserProducts(JSON.parse(localStorage.getItem('userId'))).subscribe(products => this.products = products);
  }
  public setActiveProduct(product:Product){
    this.userService.setActiveProduct(product);
  }

  ngOnInit() {
  }

}
