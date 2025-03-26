import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-desplegables',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-desplegables.component.html',
  styleUrl: './input-desplegables.component.css'
})
export class InputDesplegablesComponent {
  @Input() label: string = '';
  @Input() formControlName!: string;
  @Input() opciones: string[] = [];
}
