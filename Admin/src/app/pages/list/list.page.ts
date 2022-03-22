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

  users =  [{"name": "Marc",
                "last_name": "Roset",
                "img": "luke.jpg"
              },{"name": "Sofia",
                "last_name": "Sanchez",
                "img": "luke.jpg"
              },{"name": "Rosa",
                "last_name": "Melano",
                "img": "luke.jpg"
              },{"name": "Carla",
                "last_name": "Castillo",
                "img": "luke.jpg"
              },{"name": "Aitor",
                "last_name": "Menta",
                "img": "luke.jpg"
              },{"name": "Jordi",
                "last_name": "ENP",
                "img": "luke.jpg"
              },{"name": "Paula",
                "last_name": "Garcia",
                "img": "luke.jpg"
}];

}
