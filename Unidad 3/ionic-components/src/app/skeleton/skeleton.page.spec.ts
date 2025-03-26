import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkeletonPage } from './skeleton.page';

describe('SkeletonPage', () => {
  let component: SkeletonPage;
  let fixture: ComponentFixture<SkeletonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SkeletonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
