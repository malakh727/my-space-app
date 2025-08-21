import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pics',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pics.component.html',
  styleUrl: './pics.component.css',
})
export class PicsComponent {
  name: string = '';
  num: number = 0;
  // imageChange:string="https://www.heritage.org/sites/default/files/styles/slide_cover_xl/public/images/2018-08/Space%20Force%202.jpg?itok=sMsf8a-a";
  imageChange: string =
    'https://starregistration.net/media/wysiwyg/Constellations/Orion.png';
  cap: string[] = [
    'Orion,The_Hunter',
    'Canis_Major,The_Great_Dog',
    'Ursa_Major,Great_Bear',
    'Ursa_Minor,Little_Bear',
    'Hercules',
  ];
  images: string[] = [
    'https://starregistration.net/media/wysiwyg/Constellations/Orion.png',
    'https://starregistration.net/media/wysiwyg/Constellations/Canis_major.png',
    'https://starregistration.net/media/wysiwyg/Constellations/Ursa_major.png',
    'https://starregistration.net/media/wysiwyg/Constellations/Ursa_minor.png',
    'https://starregistration.net/media/wysiwyg/Constellations/Hercules.png',
  ];
  next() {
    if (this.num >= 4) {
      this.num = -1;
    }
    this.num = this.num + 1;
    this.imageChange = this.images[this.num];
  }
  prev() {
    if (this.num <= 0) {
      this.num = 5;
    }
    this.num = this.num - 1;
    this.imageChange = this.images[this.num];
  }
}
