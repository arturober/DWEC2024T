import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolbarsPage } from './toolbars.page';

describe('ToolbarsPage', () => {
  let component: ToolbarsPage;
  let fixture: ComponentFixture<ToolbarsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ToolbarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
