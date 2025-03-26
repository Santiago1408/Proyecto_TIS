import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-fecha',
  imports: [ReactiveFormsModule],
  templateUrl: './input-fecha.component.html',
  styleUrl: './input-fecha.component.css'
})
export class InputFechaComponent {
  @Input() label: string = '';
  @Input() formControlName!: string;
}
