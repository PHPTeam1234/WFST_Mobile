import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndexPage } from './index';
import { FooterPageModule } from '../footer/footer.module'

@NgModule({
  declarations: [
    IndexPage,
  ],
  imports: [
    IonicPageModule.forChild(IndexPage),
    FooterPageModule,
  ],
})
export class IndexPageModule {}
