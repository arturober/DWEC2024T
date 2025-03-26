import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NetworkPage } from './network.page';

describe('NetworkPage', () => {
  let component: NetworkPage;
  let fixture: ComponentFixture<NetworkPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NetworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
