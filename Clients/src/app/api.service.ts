import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient
  ) { }

  login(data){
    return this.http.post('https://private-dd269-martamillanlombrana.apiary-mock.com/login', data);
  }

  readUsers(){
    return this.http.get('https://private-dd269-martamillanlombrana.apiary-mock.com/users/1');
  }

  getOneUser(){
    return this.http.get('https://private-dd269-martamillanlombrana.apiary-mock.com/users/1');
  }
}
