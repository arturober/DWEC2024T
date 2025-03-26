import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FacebookLoginPage } from './facebook-login.page';

describe('FacebookLoginPage', () => {
  let component: FacebookLoginPage;
  let fixture: ComponentFixture<FacebookLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FacebookLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
