import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharePage } from './share.page';

describe('SharePage', () => {
  let component: SharePage;
  let fixture: ComponentFixture<SharePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SharePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
