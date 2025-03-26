import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscipcion-competidor',
  imports: [FormsModule],
  templateUrl: './inscipcion-competidor.component.html',
  styleUrl: './inscipcion-competidor.component.css'
})
export class InscipcionCompetidorComponent {
  cuadroNombres: string="";
  cuadroApellidos: string="";
  cuadroFechaNacimiento: string="";
  cuadroCI: string="";
  cuadroEmail: string="";
  cuadroNumCelular: string="";
  cuadroColegio: string="";
  cuadroCurso: string="";
  cuadroDepartamento: string="";
  cuadroProvincia: string="";
}
