import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeolocationPage } from './geolocation.page';

describe('GeolocationPage', () => {
  let component: GeolocationPage;
  let fixture: ComponentFixture<GeolocationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GeolocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
