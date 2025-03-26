import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VibrationPage } from './vibration.page';

describe('VibrationPage', () => {
  let component: VibrationPage;
  let fixture: ComponentFixture<VibrationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VibrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
