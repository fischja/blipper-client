import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BlipProvider } from '../../providers/blip/blip';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { SlidesProvider } from '../../providers/slides/slides';

@IonicPage()
@Component({
  selector: 'page-create-blip',
  templateUrl: 'create-blip.html',
})
export class CreateBlipPage {

  createBlipForm: FormGroup;

  constructor(private navCtrl: NavController,
    private blipProvider: BlipProvider,
    private formBuilder: FormBuilder,
    private slidesProvider: SlidesProvider
  ) {
    this.createBlipForm = formBuilder.group({
      title: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(3), Validators.maxLength(30)])],
      content: ['', Validators.compose([Validators.required])],
      topics: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateBlipPage');
  }

  private onSubmit(value: { title: string, content: string, topics: string }) {
    console.log('in onSubmit');

    console.log(value);

    this.blipProvider.create(value.title, value.content, value.topics);

    //if blip successfully created
    this.slidesProvider.changeSlide(1, 0);
    this.navCtrl.pop();
  }
}
