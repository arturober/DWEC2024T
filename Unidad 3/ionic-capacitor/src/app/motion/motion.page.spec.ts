import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MotionPage } from './motion.page';

describe('MotionPage', () => {
  let component: MotionPage;
  let fixture: ComponentFixture<MotionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MotionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
