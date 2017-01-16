import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { Product } from "../../model/product";
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private activeProduct : Product;
  constructor(private userService:UserService, private productService:ProductService) {
      this.userService.getActiveProduct().subscribe(product =>{ this.activeProduct = product; console.log(this.activeProduct.constructor.name)});
  }

  ngOnInit() {

  }

  public downloadFile():Window{
    switch(this.activeProduct.constructor.name){
      case 'AudioProduct': return window.open("http://localhost:4200/assets/audios/"+this.activeProduct.file);
      case 'VideoProduct' : return window.open("http://localhost:4200/assets/videos/"+this.activeProduct.file);
      case 'DocumentProdcut': return window.open("http://localhost:4200/assets/documents/"+this.activeProduct.file);

    }
  }

}
