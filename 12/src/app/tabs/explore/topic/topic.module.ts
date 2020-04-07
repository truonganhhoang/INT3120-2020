import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopicPageRoutingModule } from './topic-routing.module';

import { TopicPage } from './topic.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TopicPageRoutingModule],
  declarations: [TopicPage]
})
export class TopicPageModule {}
