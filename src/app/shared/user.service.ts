import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly rootURL = "http://localhost:60009/api"; // API connection

  constructor(private http : HttpClient) { }

  userAuth(userName, password){
    return this.http.get(this.rootURL + '/Users/mylogin?userName='+userName+'&pass='+password);
  }

  registerUser(userName, password){
    console.log('2');
    return this.http.get(this.rootURL + '/Users/register?userName='+userName+'&pass='+password);    
  }
}
