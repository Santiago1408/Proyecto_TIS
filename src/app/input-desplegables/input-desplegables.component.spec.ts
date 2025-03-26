import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDesplegablesComponent } from './input-desplegables.component';

describe('InputDesplegablesComponent', () => {
  let component: InputDesplegablesComponent;
  let fixture: ComponentFixture<InputDesplegablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputDesplegablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDesplegablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
