import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {
  @Input() listaPadre: any[];
  @Input() tipo: string;

  constructor() {}

  ngOnInit() {}

  atras() {
    const found = this.listaPadre.findIndex((element) => element.active);
    if (found > 0) {
      this.listaPadre[found].active = false;
      this.listaPadre[found - 1].active = true;
    }
  }

  adelante() {
    const found = this.listaPadre.findIndex((element) => element.active);
    if (found < this.listaPadre.length - 1) {
      this.listaPadre[found].active = false;
      this.listaPadre[found + 1].active = true;
    }
  }

  hijoEmmiter(id) {
    const found = this.listaPadre.findIndex((element) => element.id == id);
    this.listaPadre.forEach((element) => (element.active = false));
    this.listaPadre[found].active = true;
  }
}
