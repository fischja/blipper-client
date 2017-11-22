import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Content, Icon } from 'ionic-angular';
import { BubblesComponent } from '../../components/bubbles/bubbles';

@IonicPage()
@Component({
  selector: 'page-slides-container',
  templateUrl: 'slides-container.html'
})
export class SlidesContainerPage {

  @ViewChild(Slides) slides: Slides;
  @ViewChild(Content) content: Content;

  private contentWidth: number;
  private contentHeight: number;

  private currentPageTitle: string = 'TODO: Title';

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesContainerPage');

  }

  slideChanged() {

    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);

    if (currentIndex == 0) {
    }

    if (currentIndex == 1) {
    }
  }

  ionViewDidEnter() {
    this.contentHeight = this.content.contentHeight;
    this.contentWidth = this.content.contentWidth;

    console.log(this.contentHeight);
    console.log(this.contentWidth);
  }

  private profileSelected() {
    this.navCtrl.push('ProfilePage');
  }

  private createBlipSelected() {
    this.navCtrl.push('CreateBlipPage');
  }
}
