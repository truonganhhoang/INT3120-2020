import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyRecommendedListPage } from './my-recommended-list.page';

describe('MyRecommendedListPage', () => {
  let component: MyRecommendedListPage;
  let fixture: ComponentFixture<MyRecommendedListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyRecommendedListPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyRecommendedListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
