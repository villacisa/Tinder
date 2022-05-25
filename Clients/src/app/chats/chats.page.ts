import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  constructor() { }

  chicas = [{
    "nombre": "Carmen Lomana",
    "edad": 67,
    "ubicacion": "Madrid"
  }, {
    "nombre": "Isabel Pantoja",
    "edad": 69,
    "ubicacion": "Cantora"
  }, {
    "nombre": "Julia Roberts",
    "edad": 55,
    "ubicacion": "Nueva York"
  }];


  ngOnInit() {
  }

}
