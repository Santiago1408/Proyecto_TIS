import { Component } from '@angular/core';
import { InputGenericoComponent } from '../input-generico/input-generico.component';
import { InputFechaComponent } from '../input-fecha/input-fecha.component';
import { InputDesplegablesComponent } from '../input-desplegables/input-desplegables.component';
import { BotonComponent } from '../boton/boton.component';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-ins-comp',
  standalone: true,
  imports: [InputGenericoComponent, InputFechaComponent, InputDesplegablesComponent, BotonComponent, ReactiveFormsModule],
  templateUrl: './form-ins-comp.component.html',
  styleUrl: './form-ins-comp.component.css'
})
export class FormInsCompComponent {
  formInscripciones: FormGroup;

  cursos = ['Matemáticas', 'Física', 'Química', 'Biología'];
  provincias = ['Cercado', 'Chapare', 'Arani', 'Esteban Arce', 'Arce', 'Ayopaya', 'Bolívar', 'Carrasco', 'Germán Jordán', 'Mizque', 'Campero', 'Punata', 'Tapacarí', 'Tiraque'];
  departamentos = ['Cochabamba', 'La Paz', 'Santa Cruz', 'Oruro', 'Potosí', 'Tarija', 'Chuquisaca', 'Beni', 'Pando'];
  
  constructor(private fb: FormBuilder) {
    this.formInscripciones = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      ci: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      celular: ['', Validators.required],
      colegio: ['', Validators.required],
      curso: ['', Validators.required],
      provincia: ['', Validators.required],
      departamento: ['', Validators.required],
    });
  }

  onSubmit(){
    if(this.formInscripciones.valid){
      console.log("Datos enviados correctamente", this.formInscripciones.value);
    } else {
      console.log("Formulaio invalido");
    }
  }

}

