import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InscipcionCompetidorComponent } from './inscipcion-competidor/inscipcion-competidor.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InscipcionCompetidorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto_TIS';
}
