import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchbarPage } from './searchbar.page';

describe('SearchbarPage', () => {
  let component: SearchbarPage;
  let fixture: ComponentFixture<SearchbarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
