import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertPage } from './alert.page';

describe('AlertPage', () => {
  let component: AlertPage;
  let fixture: ComponentFixture<AlertPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
