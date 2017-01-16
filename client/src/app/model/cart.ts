import { Product } from "./product";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
export class Cart {
  private products:Set<Product> = new Set<Product>();
  constructor(){}

  public addProduct(product: Product):void{
    this.products.add(product);
  }

  public removeProduct(product : Product) : void{
    this.products.delete(product);
  }

  public getProducts():Set<Product>{
    return this.products;
  }

  public calculateSome():number{
    var some = 0;
    this.products.forEach(product => {
      some += product.price;
    });
    return some;
  }

  public purgeCart(){
    this.products.clear();
  }
}
