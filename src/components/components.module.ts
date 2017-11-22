import { NgModule } from '@angular/core';
import { BubblesComponent } from './bubbles/bubbles';
import { MyActivityComponent } from './my-activity/my-activity';
import { HeaderBarComponent } from './header-bar/header-bar';
import { IonicModule } from 'ionic-angular';

@NgModule({
    declarations: [
        BubblesComponent,
        MyActivityComponent,
        HeaderBarComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        BubblesComponent,
        MyActivityComponent,
        HeaderBarComponent
    ]
})
export class ComponentsModule { }
