import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/core/services/firebase/auth/user.service';

@Component({
  selector: 'app-settings-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  isUpdating = false;
  signInMethods: string[];

  constructor(private modalController: ModalController, private userService: UserService) {}

  async ngOnInit() {
    try {
      this.signInMethods = await this.userService.signInMethods();
    } catch {
      this.signInMethods = [];
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
