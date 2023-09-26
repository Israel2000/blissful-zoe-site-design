import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLoginPageComponent } from './account-login-page.component';

describe('AccountLoginPageComponent', () => {
  let component: AccountLoginPageComponent;
  let fixture: ComponentFixture<AccountLoginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountLoginPageComponent]
    });
    fixture = TestBed.createComponent(AccountLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
