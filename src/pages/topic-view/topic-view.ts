import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-topic-view',
  templateUrl: 'topic-view.html',
})
export class TopicViewPage {

  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 0; i < 30; i++) {
      this.items.push(this.items.length);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicViewPage');
  }


  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push(this.items.length);
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
