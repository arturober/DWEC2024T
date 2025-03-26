import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilesystemPage } from './filesystem.page';

describe('FilesystemPage', () => {
  let component: FilesystemPage;
  let fixture: ComponentFixture<FilesystemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FilesystemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
