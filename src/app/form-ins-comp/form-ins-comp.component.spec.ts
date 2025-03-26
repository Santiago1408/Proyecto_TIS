import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInsCompComponent } from './form-ins-comp.component';

describe('FormInsCompComponent', () => {
  let component: FormInsCompComponent;
  let fixture: ComponentFixture<FormInsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInsCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
