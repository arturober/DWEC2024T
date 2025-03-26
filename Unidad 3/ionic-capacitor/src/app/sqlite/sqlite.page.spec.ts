import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SqlitePage } from './sqlite.page';

describe('SqlitePage', () => {
  let component: SqlitePage;
  let fixture: ComponentFixture<SqlitePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SqlitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
