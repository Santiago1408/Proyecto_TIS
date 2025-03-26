import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InscipcionCompetidorComponent } from './inscipcion-competidor/inscipcion-competidor.component';
import { Competidor } from './competidor.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InscipcionCompetidorComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto_TIS';

  competidores: Competidor[] = [
    new Competidor(1, "Josue Santiago", "García Gámez", "14/08/2003", "12402320", "josueg4rcia@gmail.com", "69435058", "San Agustín", "5to", "Cochabamba", "Cercado"),
    
  ];
}
