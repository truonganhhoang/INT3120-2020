import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeekPage } from './week.page';

describe('WeekPage', () => {
  let component: WeekPage;
  let fixture: ComponentFixture<WeekPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeekPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
