import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReorderPage } from './reorder.page';

describe('ReorderPage', () => {
  let component: ReorderPage;
  let fixture: ComponentFixture<ReorderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
