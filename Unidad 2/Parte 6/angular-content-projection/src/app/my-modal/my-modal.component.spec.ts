import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModalComponent } from './my-modal.component';

describe('MyModalComponent', () => {
  let component: MyModalComponent;
  let fixture: ComponentFixture<MyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
