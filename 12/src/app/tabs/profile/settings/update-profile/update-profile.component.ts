import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  isSubmiting = false;
  displayName: string;
  photoURL: string;

  updateProfileForm: FormGroup;
  displayNameControl: AbstractControl;

  constructor(private modalController: ModalController, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.updateProfileForm = this.formBuilder.group({
      displayName: [this.displayName],
      photo: [null]
    });
    this.displayNameControl = this.updateProfileForm.get('displayName');
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
