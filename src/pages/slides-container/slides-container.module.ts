import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlidesContainerPage } from './slides-container';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SlidesContainerPage,
  ],
  imports: [
    IonicPageModule.forChild(SlidesContainerPage),
    ComponentsModule
  ],
})
export class SlidesContainerPageModule { }
