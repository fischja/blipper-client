import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BlipProvider } from '../../providers/blip/blip';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { SlidesProvider } from '../../providers/slides/slides';
import 'rxjs/add/operator/debounceTime';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-create-blip',
  templateUrl: 'create-blip.html',
})
export class CreateBlipPage {

  createBlipForm: FormGroup;
  private topics: string[];

  private topicsFormSubscription: Subscription;

  constructor(private navCtrl: NavController,
    private blipProvider: BlipProvider,
    private formBuilder: FormBuilder,
    private slidesProvider: SlidesProvider
  ) {
    this.topics = [];

    this.createBlipForm = formBuilder.group({
      title: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(3), Validators.maxLength(30)])],
      content: ['', Validators.compose([Validators.required])],
      topics: ['', Validators.compose([Validators.required])]
    });

    this.topicsFormSubscription = this.createBlipForm.controls['topics'].valueChanges
      .debounceTime(200)
      .subscribe(value => {

        //Check if topic already exists
        if (this.topics.findIndex(x => x === value) != -1) {
          console.log('setting error');
          this.createBlipForm.controls['topics'].setErrors({ 'exists': true });

          if (this.createBlipForm.controls['topics'].errors != null) {
            console.log(this.createBlipForm.controls['topics'].errors);
          }
          else {
            console.log('removing error');
            this.createBlipForm.controls['topics'].setErrors({ 'exists': false });

            if (this.createBlipForm.controls['topics'].errors != null) {
              console.log(this.createBlipForm.controls['topics'].errors);
            }
          }
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateBlipPage');
  }

  ionViewWillLeave(): void {
    console.log('ionViewWillLeave CreateBlipPage')

    if (this.topicsFormSubscription != null || !this.topicsFormSubscription) {
      this.topicsFormSubscription.unsubscribe();
    }
  }

  private onSubmit(value: { title: string, content: string, topics: string }) {
    console.log('in onSubmit');

    console.log(value);

    this.blipProvider.create(value.title, value.content, value.topics);

    //if blip successfully created
    this.slidesProvider.changeSlide(1, 0);
    this.navCtrl.pop();
  }

  private addTopic(topic: string) {
    console.log('in addTopic, value: ' + topic);
    topic = topic.toLowerCase();



    this.topics.push(topic);
    this.createBlipForm.controls['topics'].reset();
  }


}
