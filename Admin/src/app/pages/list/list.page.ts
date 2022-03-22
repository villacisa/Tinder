import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    users: [
    {
        nombre: "Lucía",
        edad: 27,
        genero: "Mujer",
        localización: "Barcelona"
    }, {
        nombre: "María",
        edad: 30,
        genero: "Mujer",
        localización: "Badalona"
    }, {
        nombre: "Alba",
        edad: 24,
        genero: "Mujer",
        localización: "Albacete"
    }, {
        nombre: "Adrián",
        edad: 19,
        genero: "Hombre",
        localización: "Barcelona"
    }
]

}
