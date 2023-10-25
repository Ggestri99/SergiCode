import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  public myForm: FormGroup = this.fb.group({
    name: ['', []],
    surname: ['', []],
    email: ['', []],
    age: ['', []],
    pokemon: ['', []],
  })


  constructor(
    private fb: FormBuilder
  ) {}

}
