import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Header, Icon } from 'ionic-angular';

@Component({
  selector: 'header-bar',
  templateUrl: 'header-bar.html'
})
export class HeaderBarComponent {

  @Input() title: string = '';

  @Output() profileSelected = new EventEmitter();
  @Output() createBlipSelected = new EventEmitter();

  searchBarActive: boolean = false;

  constructor() {
    console.log('Hello HeaderBarComponent Component');

    this.profileSelected.emit()
  }

  toggleSearchBarActive() {
    this.searchBarActive = this.searchBarActive ? false : true;
    console.log("searchBarActive set to " + this.searchBarActive)

  }

  private profileWasSelected() {
    this.profileSelected.emit();
  }

  private createBlipWasSelected() {
    this.createBlipSelected.emit();
  }

}
