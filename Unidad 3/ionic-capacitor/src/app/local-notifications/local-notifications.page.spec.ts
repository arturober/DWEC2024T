import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalNotificationsPage } from './local-notifications.page';

describe('LocalNotificationsPage', () => {
  let component: LocalNotificationsPage;
  let fixture: ComponentFixture<LocalNotificationsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LocalNotificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
