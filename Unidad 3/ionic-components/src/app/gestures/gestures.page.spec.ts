import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GesturesPage } from './gestures.page';

describe('GesturesPage', () => {
  let component: GesturesPage;
  let fixture: ComponentFixture<GesturesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GesturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
