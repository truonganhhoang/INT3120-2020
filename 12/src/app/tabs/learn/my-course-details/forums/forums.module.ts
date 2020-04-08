import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForumsPageRoutingModule } from './forums-routing.module';

import { ForumsPage } from './forums.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ForumsPageRoutingModule],
  declarations: [ForumsPage]
})
export class ForumsPageModule {}
