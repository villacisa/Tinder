import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient

  ) { }

  getUserAdmin(data){
    return this.http.post('https://private-79538-tinder5.apiary-mock.com/login', data); //cambiar ruta
  }

  readUsers(){
    return this.http.get('https://private-b7f49-martamillanlombrana.apiary-mock.com/users');
  }

  detailOneUser(id){
    id=1;
    return this.http.get('https://private-b7f49-martamillanlombrana.apiary-mock.com/user/' + id);
  }
}
