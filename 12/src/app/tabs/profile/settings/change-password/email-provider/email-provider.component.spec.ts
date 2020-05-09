import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ChangePasswordForEmailProviderComponent } from './email-provider.component';

describe('EmailProviderComponent', () => {
  let component: ChangePasswordForEmailProviderComponent;
  let fixture: ComponentFixture<ChangePasswordForEmailProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChangePasswordForEmailProviderComponent],
      imports: [IonicModule],
      providers: [FormBuilder]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangePasswordForEmailProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
