import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-ins-comp',
  imports: [],
  templateUrl: './form-ins-comp.component.html',
  styleUrl: './form-ins-comp.component.css'
})
export class FormInsCompComponent {
  @Input() label: string = '';
  @Input() formControlName!: string;
  @Input() type: 'button' | 'submit' = 'button';
}
