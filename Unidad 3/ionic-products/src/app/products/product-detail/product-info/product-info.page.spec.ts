import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductInfoPage } from './product-info.page';

describe('ProductInfoPage', () => {
  let component: ProductInfoPage;
  let fixture: ComponentFixture<ProductInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
