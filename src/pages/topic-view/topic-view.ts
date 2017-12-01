import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BlipProvider } from '../../providers/blip/blip';
import { Subscription } from 'rxjs/Subscription';
import { PopularBlip } from '../../models/popular-blip';

@IonicPage()
@Component({
  selector: 'page-topic-view',
  templateUrl: 'topic-view.html',
})
export class TopicViewPage {

  private items: PopularBlip[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private blipProvider: BlipProvider
  ) {
    this.items = new Array<PopularBlip>();
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter TopicViewPage');

    this.blipProvider.getTop().subscribe(x => {
      x.forEach(item => {
        this.items.push(item);
      })
    });
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave TopicViewPage');

    this.items = new Array<PopularBlip>();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicViewPage');

    console.log(this.items);
  }


  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {

      this.blipProvider.getTop().subscribe(x => {
        x.forEach(item => {
          this.items.push(item);
        })
      });

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
  