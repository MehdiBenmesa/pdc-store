import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { User } from "../model/user";
import { UserFactory } from "../util/user-factory";
import { Subject } from "rxjs/Subject";

@Injectable()
export class UserService {
  private loginStatus : Subject<boolean> = new Subject<boolean>();
  private user: Subject<User> = new Subject<User>();
  private userObservable : Observable<User> = this.user.asObservable();

  private baseUrl = 'http://localhost:3000/user-api';
  constructor(private http : Http) {
  }

  public setLoginStatus(status:boolean){
    this.loginStatus.next(status);
  }

  public setUser(user : User){
    this.user.next(user);
  }

  public getUser():Observable<User>{
    return this.userObservable;
  }

  public getLoginStatus():Observable<boolean>{
    return this.loginStatus.asObservable();
  }

  public login(username : string, password : string) : Observable<User>{
     this.userObservable = this.http.post(`${this.baseUrl}/authenticate`,{username, password})
      .map((response: Response) => UserFactory.createUser(response.json()))
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
      return this.userObservable;
  }

  public signup(username, email, password, type): Observable<User>{
   this.userObservable = this.http.post(`${this.baseUrl}/user`, {username, email, password, type})
         .map((response: Response) => UserFactory.createUser(response.json()))
         .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    return this.userObservable;
  }

  public getUserById(id:string): Observable<User>{
    this.userObservable = this.http.get(`${this.baseUrl}/user/${id}`)
         .map((response: Response) => UserFactory.createUser(response.json()))
         .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    return this.userObservable;
  }


}
