import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { CompletedCoursesComponent } from './completed-courses.component';

describe('CompletedCoursesComponent', () => {
  let component: CompletedCoursesComponent;
  let fixture: ComponentFixture<CompletedCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedCoursesComponent],
      imports: [IonicModule, RouterTestingModule.withRoutes([])]
    }).compileComponents();

    fixture = TestBed.createComponent(CompletedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
