import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClipboardPage } from './clipboard.page';

describe('ClipboardPage', () => {
  let component: ClipboardPage;
  let fixture: ComponentFixture<ClipboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClipboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
