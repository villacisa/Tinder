import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient

  ) { }

  readAdmins(){
    return this.http.get('https://private-b7f49-martamillanlombrana.apiary-mock.com/users'); //cambiar ruta
  }

  readUsers(){
    return this.http.get('https://private-b7f49-martamillanlombrana.apiary-mock.com/users'); //cambiar ruta
  }

  readPokemons(data){
    return this.http.post('http://localhost/backendionic/read.php', data);
  }

  removePokemon(data){
    return this.http.post('http://localhost/backendionic/delete.php', data);
  }
}
