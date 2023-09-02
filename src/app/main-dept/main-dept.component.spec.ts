import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDeptComponent } from './main-dept.component';

describe('MainDeptComponent', () => {
  let component: MainDeptComponent;
  let fixture: ComponentFixture<MainDeptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainDeptComponent]
    });
    fixture = TestBed.createComponent(MainDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
