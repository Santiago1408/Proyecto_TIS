import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-generico',
  imports: [ReactiveFormsModule],
  templateUrl: './input-generico.component.html',
  styleUrl: './input-generico.component.css'
})
export class InputGenericoComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() formControlName!: string;

}
