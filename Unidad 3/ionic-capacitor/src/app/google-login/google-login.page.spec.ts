import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoogleLoginPage } from './google-login.page';

describe('GoogleLoginPage', () => {
  let component: GoogleLoginPage;
  let fixture: ComponentFixture<GoogleLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GoogleLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
