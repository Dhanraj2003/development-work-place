import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL="http://localhost:8080/users";

  constructor(private http: HttpClient) { }


  //add user
  public adduser(user:any)
  {
    return this.http.post(`${baseurl}/user`,user);
  }

  //get user
  getUserList():Observable<User[]>{

    return this.http.get<User[]>(`${this.baseURL}`);
  }

  //get user by id
}
