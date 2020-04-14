import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { LearnPageRoutingModule } from './learn-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [IonicModule, CommonModule, RouterModule, LearnPageRoutingModule],
  declarations: []
})
export class LearnModule {}
