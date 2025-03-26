import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlashlightPage } from './flashlight.page';

describe('FlashlightPage', () => {
  let component: FlashlightPage;
  let fixture: ComponentFixture<FlashlightPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FlashlightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
