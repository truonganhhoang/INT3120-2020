import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GradesPage } from './grades.page';

describe('GradesPage', () => {
  let component: GradesPage;
  let fixture: ComponentFixture<GradesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GradesPage],
      imports: [IonicModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(GradesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
