import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormInsCompComponent } from "./form-ins-comp/form-ins-comp.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormInsCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto_TIS';
}
