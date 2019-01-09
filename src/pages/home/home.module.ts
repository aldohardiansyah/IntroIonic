import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    FlexLayoutModule
  ],
})
export class HomePageModule {}
