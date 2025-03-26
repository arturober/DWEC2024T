import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCommentsPage } from './product-comments.page';

describe('ProductCommentsPage', () => {
  let component: ProductCommentsPage;
  let fixture: ComponentFixture<ProductCommentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCommentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
