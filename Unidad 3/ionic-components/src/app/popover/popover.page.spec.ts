import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopoverPage } from './popover.page';

describe('PopoverPage', () => {
  let component: PopoverPage;
  let fixture: ComponentFixture<PopoverPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
