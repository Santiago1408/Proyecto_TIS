import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { Competidor } from '../competidor.model';

@Component({
  selector: 'app-inscipcion-competidor',
  imports: [FormsModule, CommonModule],
  templateUrl: './inscipcion-competidor.component.html',
  styleUrl: './inscipcion-competidor.component.css'
})
export class InscipcionCompetidorComponent {
  numeroCompetidores: number=1;

  cuadroNombres: string="";
  cuadroApellidos: string="";
  cuadroFechaNacimiento: string="";
  cuadroCI: string="";
  cuadroEmail: string="";
  cuadroNumCelular: string="";
  cuadroColegio: string="";
  cuadroCurso: string="";
  cuadroDepartamento: string="2";
  cuadroProvincia: string="";

  competidores: Competidor[] = [
    new Competidor(0, "Josue Santiago", "García Gámez", "14/08/2003", "12402320", "josueg4rcia@gmail.com", "69435058", "San Agustín", "5to", "Cochabamba", "Cercado"),
    
  ];

  agregarCompetidor(){
    let nuevoCompetidor = new Competidor(this.numeroCompetidores, this.cuadroNombres, this.cuadroApellidos, this.cuadroFechaNacimiento, this.cuadroCI, this.cuadroEmail, this.cuadroNumCelular, this.cuadroColegio, this.cuadroCurso, this.cuadroDepartamento, this.cuadroProvincia); 
    this.competidores.push(nuevoCompetidor);
    this.numeroCompetidores++;
  }
}
