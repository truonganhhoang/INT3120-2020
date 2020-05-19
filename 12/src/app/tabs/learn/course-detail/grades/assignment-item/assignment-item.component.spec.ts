import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssignmentItemComponent } from './assignment-item.component';

describe('AssignmentItemComponent', () => {
  let component: AssignmentItemComponent;
  let fixture: ComponentFixture<AssignmentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentItemComponent],
      imports: [IonicModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AssignmentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
