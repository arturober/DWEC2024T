import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VirtualScrollPage } from './virtual-scroll.page';

describe('VirtualScrollPage', () => {
  let component: VirtualScrollPage;
  let fixture: ComponentFixture<VirtualScrollPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VirtualScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
