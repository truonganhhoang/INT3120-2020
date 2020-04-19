import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetPasswordForFacebookProviderComponent } from './facebook-provider.component';

describe('SetPasswordForFacebookProviderComponent', () => {
  let component: SetPasswordForFacebookProviderComponent;
  let fixture: ComponentFixture<SetPasswordForFacebookProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SetPasswordForFacebookProviderComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetPasswordForFacebookProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
