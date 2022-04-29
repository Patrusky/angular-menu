import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent implements OnInit {
  @Input() hijo: any;

  @Output() newItemEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  click(id) {
    this.newItemEvent.emit(id);
  }
}
