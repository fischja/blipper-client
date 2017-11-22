import { Component } from '@angular/core';
import { IBlipperPage } from '../../interfaces/IBlipperPage';

@Component({
  selector: 'my-activity',
  templateUrl: 'my-activity.html'
})
export class MyActivityComponent implements IBlipperPage {

  pageTitle: string;

  constructor() {
    console.log('Hello MyActivityComponent Component');
  }
}
