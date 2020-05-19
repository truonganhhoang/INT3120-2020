import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GradesPageRoutingModule } from './grades-routing.module';

import { GradesPage } from './grades.page';
import { AssignmentItemComponent } from './assignment-item/assignment-item.component';
import { AssignmentContentComponent } from './assignment-content/assignment-content.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, GradesPageRoutingModule],
  declarations: [GradesPage, AssignmentItemComponent, AssignmentContentComponent]
})
export class GradesPageModule {}
