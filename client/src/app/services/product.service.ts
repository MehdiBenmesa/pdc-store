import { Http, Response } from '@angular/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Product } from './../model/product'
import { ProductFactory } from './../util/product-factory'
import { Subject } from "rxjs/Subject";
import { Cart } from "../model/cart";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { User } from "../model/user";
import 'rxjs/Rx';

@Injectable()
export class ProductService {
  private baseUrl = 'http://localhost:3000/product-api';
  private productObservable : Observable<Product[]> = new Observable<Product[]>();
  private cartSubject : BehaviorSubject<Cart> = new BehaviorSubject<Cart>(new Cart())
  private cartObservable: Observable<Cart> = this.cartSubject.asObservable();

  constructor(private http: Http) { }

  public getAllProducts(): Observable<Product[]>{
     this.productObservable = this.http.get(`${this.baseUrl}/products`)
                    .map((res: Response) => ProductFactory.createProducts(res.json()))
                    .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
     return this.productObservable;
  }

  public getCart():Observable<Cart>{
    return this.cartObservable;
  }

  public addProduct(product:Product){
      this.cartSubject
      .getValue()
      .addProduct(product)
      this.cartSubject.next(this.cartSubject.getValue());
      console.log(this.cartSubject.getValue())
  }

  public removeProduct(product : Product){
    this.cartSubject.getValue().removeProduct(product);
    this.cartSubject.next(this.cartSubject.getValue());
  }

  public downloadfile(name : string){

  }


}
