import { NgModule } from '@angular/core';
import { BubblesComponent } from './bubbles/bubbles';
import { MyActivityComponent } from './my-activity/my-activity';
import { HeaderBarComponent } from './header-bar/header-bar';
import { IonicModule } from 'ionic-angular';
import { BlipListItemComponent } from './blip-list-item/blip-list-item';

@NgModule({
    declarations: [
        BubblesComponent,
        MyActivityComponent,
        HeaderBarComponent,
    BlipListItemComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        BubblesComponent,
        MyActivityComponent,
        HeaderBarComponent,
    BlipListItemComponent
    ]
})
export class ComponentsModule { }
