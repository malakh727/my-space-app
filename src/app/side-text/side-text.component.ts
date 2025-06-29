import { Component } from '@angular/core';
import { CardsComponent } from './cards/cards.component';

@Component({
  selector: 'app-side-text',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './side-text.component.html',
  styleUrl: './side-text.component.css',
})
export class SideTextComponent {
  greet: string = 'Discover more about celetial objects!';
  message: string =
    "When you look up at the sky and wonder ,you'll find your answers here!";
  messageOrg: string =
    "When you look up at the sky and wonder ,you'll find your answers here!";

  original() {
    this.message = this.messageOrg;
  }
  receivemess($event: string) {
    this.message = $event;
  }
}
