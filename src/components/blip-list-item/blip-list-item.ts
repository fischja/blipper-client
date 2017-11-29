import { Component } from '@angular/core';

@Component({
  selector: 'blip-list-item',
  templateUrl: 'blip-list-item.html'
})
export class BlipListItemComponent {

  text: string;

  constructor() {
    console.log('Hello BlipListItemComponent Component');
    this.text = 'Hello World';
  }

}
