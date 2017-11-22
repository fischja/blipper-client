import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateBlipPage } from './create-blip';

@NgModule({
  declarations: [
    CreateBlipPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateBlipPage),
  ],
})
export class CreateBlipPageModule {}
