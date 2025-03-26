import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfiniteScrollPage } from './infinite-scroll.page';

describe('InfiniteScrollPage', () => {
  let component: InfiniteScrollPage;
  let fixture: ComponentFixture<InfiniteScrollPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfiniteScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
