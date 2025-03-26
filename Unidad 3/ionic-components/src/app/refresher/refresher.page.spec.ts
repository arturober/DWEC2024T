import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RefresherPage } from './refresher.page';

describe('RefresherPage', () => {
  let component: RefresherPage;
  let fixture: ComponentFixture<RefresherPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RefresherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
