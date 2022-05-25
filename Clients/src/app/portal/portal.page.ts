import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.page.html',
  styleUrls: ['./portal.page.scss'],
})
export class PortalPage implements OnInit {

  usuario: Object;
  usuarios: any;
  
  
  constructor(
    public _apiService: ApiService
  ) { }

  ngOnInit() {
    this.getOneUser();
  }


  //función que devuelve un usuario al que nunca he hecho like ni dislike
  getOneUser(){
    this._apiService.getOneUser().subscribe((response) => {
      this.usuarios = response;
      this.usuario = response[0];
      console.log(this.usuario);
    });
  }

  btnLike(){
    //gestionar like a nivel de backend

    //Mostrar la siguiente persona
    //this.getOneUser();
    this.usuario = this.usuarios[1];
  }

  btnDislike(){
    //gestionar dislike a nivel de backend

    //Mostrar la siguiente persona
    //this.getOneUser();
    this.usuario = this.usuarios[1];
  }
  flechaIzq(){
    this.usuario = this.usuarios[0];
  }

  flechaDer(){
    this.usuario = this.usuarios[1];
  }

}


