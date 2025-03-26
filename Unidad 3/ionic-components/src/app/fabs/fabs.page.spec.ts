import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FabsPage } from './fabs.page';

describe('FabsPage', () => {
  let component: FabsPage;
  let fixture: ComponentFixture<FabsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
