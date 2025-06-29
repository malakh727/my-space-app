import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  @Input() greet: string = '';
  mess: string =
    'A galaxy is a gravitationally bound system of stars, stellar remnants, interstellar gas, dust, and dark matter!';
  mess2: string =
    'A star is an astronomical object consisting of a luminous spheroid of plasma held together by its own gravity!';
  mess3: string = 'A planet is an astronomical body orbiting a star!';
  @Output() messevent = new EventEmitter();

  sendmess() {
    this.messevent.emit(this.mess);
  }
  sendmess2() {
    this.messevent.emit(this.mess2);
  }
  sendmess3() {
    this.messevent.emit(this.mess3);
  }
}
