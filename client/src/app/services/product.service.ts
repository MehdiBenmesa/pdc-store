import { Http, Response } from '@angular/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Product } from './../model/product'
import { ProductFactory } from './../util/product-factory'
import 'rxjs/Rx';

@Injectable()
export class ProductService {
  private baseUrl = 'http://localhost:3000/product-api';
  constructor(private http: Http) { }

  public getAllProducts(): Observable<Product[]>{
    return this.http.get(`${this.baseUrl}/products`)
                    .map((res: Response) => ProductFactory.createProducts(res.json()))
                    .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  public getProductDetails(id: number): Observable<Product>{
    return this.http.get('')
                    .map((res: Response) => res.json())
                    .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
   }

}
