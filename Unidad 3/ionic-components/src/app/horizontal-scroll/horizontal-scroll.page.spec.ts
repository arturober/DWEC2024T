import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorizontalScrollPage } from './horizontal-scroll.page';

describe('HorizontalScrollPage', () => {
  let component: HorizontalScrollPage;
  let fixture: ComponentFixture<HorizontalScrollPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HorizontalScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
