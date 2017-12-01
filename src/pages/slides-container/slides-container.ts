import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Content, Icon } from 'ionic-angular';
import { BubblesComponent } from '../../components/bubbles/bubbles';
import { SlidesProvider } from '../../providers/slides/slides';

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
  private currentSlideIndex: number = 0;
  private currentPageTitle: string = 'TODO: Title';

  constructor(public navCtrl: NavController, public navParams: NavParams, private slidesProvider: SlidesProvider) {
  }

  ionViewWillLoad() {
    console.log('ionViewWillLoad SlidesContainerPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesContainerPage');

    this.slidesProvider.onSlideChanged().subscribe(x => {
      if (!x.infoOnly) {
        this.slides.slideTo(x.slideIndex, x.transitionTime);
      }
    });
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter SlidesContainerPage');
    if (this.currentSlideIndex == 0) {
      this.slidesProvider.changeSlide(true, 0);
    }
  }

  slideChanged() {
    this.currentSlideIndex = this.slides.getActiveIndex();

    this.slidesProvider.changeSlide(true, this.currentSlideIndex);
    console.log('Current index is', this.currentSlideIndex);
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

  private topicSelected() {
    this.navCtrl.push('TopicViewPage');
  }

  private createBlipSelected() {
    this.navCtrl.push('CreateBlipPage');
  }
}
