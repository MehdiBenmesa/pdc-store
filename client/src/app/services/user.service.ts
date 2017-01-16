import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { User } from "../model/user";
import { Wallet } from "../model/wallet";
import { UserFactory } from "../util/user-factory";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ProductFactory } from "../util/product-factory";
import { Product } from "../model/product";

@Injectable()
export class UserService {
  private loginStatus : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private user: Subject<User> = new Subject<User>();
  private wallet : Subject<Wallet> = new Subject<Wallet>();
  private userObservable : Observable<User> = this.user.asObservable();
  private walletObservable : Observable<Wallet> = this.wallet.asObservable();
  private userProductObservable : Observable<Product[]> = new Observable<Product[]>();
  private activeProduct : BehaviorSubject<Product> = new BehaviorSubject<Product>(null);
  private activeProductObservable: Observable<Product> = this.activeProduct.asObservable();

  private baseUrl = 'http://localhost:3000/user-api';
  constructor(private http : Http) {
  }

  public setLoginStatus(status:boolean){
    this.loginStatus.next(status);
  }

  public setUser(user : User){
    this.user.next(user);
  }

  public chargeWallet(id, amount){
    this.http.post(`${this.baseUrl}/charge-wallet`, {id:id , amount:amount })
      .map((response: Response) => UserFactory.createUser(response.json()))
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
      .subscribe(user => { this.user.next(user), console.log(user)});

  }

  public setActiveProduct(product: Product):void{
    this.activeProduct.next(product);
  }

  public getActiveProduct():Observable<Product>{
    return this.activeProductObservable;
  }

  public setWallet(wallet : Wallet){
    this.wallet.next(wallet);
  }

  public checkOut(user, products, price){
    this.http.post(`${this.baseUrl}/check-out`, {id:user.id,amount: price, products})
      .map((response: Response) => UserFactory.createUser(response.json()))
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
      .subscribe(user => {
        this.setUser(user);
        this.setWallet(user.wallet);
      });
  }
  public getUser():Observable<User>{
    return this.userObservable;
  }

  public getWallet():Observable<Wallet>{
    return this.walletObservable;
  }

  public getLoginStatus():Observable<boolean>{
    return this.loginStatus.asObservable();
  }

  public login(username : string, password : string) : Observable<User>{
     this.userObservable = this.http.post(`${this.baseUrl}/authenticate`,{username, password})
      .map((response: Response) => UserFactory.createUser(response.json()))
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
      this.userObservable.subscribe(user => this.wallet.next(user.wallet) );
      return this.userObservable;
  }

  public signup(username, email, password, type): Observable<User>{
   this.userObservable = this.http.post(`${this.baseUrl}/user`, {username, email, password, type})
         .map((response: Response) => UserFactory.createUser(response.json()))
         .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
      this.userObservable.subscribe(user => this.wallet.next(user.wallet) );
    return this.userObservable;
  }

  public getUserById(id:string): Observable<User>{
    this.userObservable = this.http.get(`${this.baseUrl}/user/${id}`)
         .map((response: Response) => UserFactory.createUser(response.json()))
         .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
      this.userObservable.subscribe(user => this.wallet.next(user.wallet) );
    return this.userObservable;
  }
  public getUserProducts(id:string){
    this.userProductObservable = this.http.get(`${this.baseUrl}/user-products/${id}` )
                    .map((res: Response) => ProductFactory.createProducts(res.json()))
                    .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    return this.userProductObservable;
  }

}
