import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';

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
    phone: ['', []],
    country: ['', []],
    city: ['', []]
  })


  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {}


  home() {
    this.router.navigate(['/home'])
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        name: this.myForm.get('name')?.value,
        surname: this.myForm.get('surname')?.value,
        email: this.myForm.get('email')?.value,
        phone: this.myForm.get('phone')?.value,
        city: this.myForm.get('city')?.value,
        country: this.myForm.get('country')?.value
      },
    });

  }

}
