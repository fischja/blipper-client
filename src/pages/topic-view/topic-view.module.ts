import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopicViewPage } from './topic-view';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TopicViewPage,
  ],
  imports: [
    IonicPageModule.forChild(TopicViewPage),
    ComponentsModule
  ],
})
export class TopicViewPageModule { }
