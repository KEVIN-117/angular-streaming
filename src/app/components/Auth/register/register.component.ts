import {Component} from '@angular/core';
import {ButtonsComponent} from "../components/buttons/buttons.component";
import {ContainerComponent} from "../components/container/container.component";
import { RouterLink } from "@angular/router";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {FormDto} from "@/types";



@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    ButtonsComponent,
    ContainerComponent,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  protected form: FormGroup<FormDto>;
  showPassword: boolean = false;
  isAuthenticated: boolean = false;
  constructor() {
    this.form = new FormGroup<FormDto>({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ])
    })
  }

  submit(){
    if (!this.form.valid) return
    try {

    }catch (e){
      if (e instanceof Error) {
        alert(`Error if ${e.message}`)
        console.error(e.message)
      }else {
        alert(`Error else ${e}`)
      }
    }
  }
}

