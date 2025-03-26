import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsPage } from './forms.page';

describe('FormsPage', () => {
  let component: FormsPage;
  let fixture: ComponentFixture<FormsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
