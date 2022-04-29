import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abuelo',
  templateUrl: './abuelo.component.html',
  styleUrls: ['./abuelo.component.css'],
})
export class AbueloComponent implements OnInit {
  lista: any;
  normal: any[];
  experto: any[];
  tipo: string;
  constructor() {
    this.normal = [
      { id: 1, active: true },
      { id: 2, active: false },
      { id: 3, active: false },
      { id: 4, active: false },
    ];

    this.experto = [
      { id: 1, active: true },
      { id: 2, active: false },
      { id: 3, active: false },
      { id: 4, active: false },
      { id: 5, active: false },
      { id: 6, active: false },
    ];

    this.lista = this.normal;
    this.tipo = 'basic';
  }

  tipoLista(tipo: string) {
    this.tipo = tipo;
    if (tipo == 'basic') {
      this.lista = this.normal;
    }
    if (tipo == 'expert') {
      this.lista = this.experto;
    }
  }
  ngOnInit() {}

  padreEmmiter(lista) {
    const found = this.lista.findIndex((element) => element.lista == lista);
    this.lista.forEach((element) => (element.active = false));
    this.lista[found].active = true;
  }
}
