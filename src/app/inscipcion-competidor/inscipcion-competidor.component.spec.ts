import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscipcionCompetidorComponent } from './inscipcion-competidor.component';

describe('InscipcionCompetidorComponent', () => {
  let component: InscipcionCompetidorComponent;
  let fixture: ComponentFixture<InscipcionCompetidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscipcionCompetidorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscipcionCompetidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
