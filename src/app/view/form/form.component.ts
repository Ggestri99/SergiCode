import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [
    provideNgxMask(),
  ],

})
export class FormComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    address: ['', [Validators.required]],
    country: ['', [Validators.required]]
  })


  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) { }


  home() {
    this.router.navigate(['/home'])
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      height: '200px',
      width: '400px',
      data: {
        name: this.myForm.get('name')?.value,
        surname: this.myForm.get('surname')?.value,
        email: this.myForm.get('email')?.value,
        phone: this.myForm.get('phone')?.value,
        country: this.myForm.get('country')?.value,
        address: this.myForm.get('address')?.value
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      this.myForm.get('name')?.setValue(' ');
      this.myForm.get('surname')?.setValue(' ');
      this.myForm.get('email')?.setValue(' ');
      this.myForm.get('phone')?.setValue(' ');
      this.myForm.get('country')?.setValue(' ');
      this.myForm.get('address')?.setValue(' ');

      this.myForm.markAsPristine();
      this.myForm.markAsUntouched();
    });

  }

  public inputTransformFn = (value: unknown): string =>
    typeof value === 'string' ? value.toUpperCase() : String(value);

  public outputTransformFn = (value: string | number | null | undefined): string => {
    return value ? String(value).toUpperCase() : ''
  };
};


