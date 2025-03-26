import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppPage } from './app.page';

describe('AppPage', () => {
  let component: AppPage;
  let fixture: ComponentFixture<AppPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
