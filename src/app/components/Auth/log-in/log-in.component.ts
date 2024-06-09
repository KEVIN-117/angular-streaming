import {Component} from '@angular/core';
import {ButtonsComponent} from "../components/buttons/buttons.component";
import {RouterLink} from "@angular/router";
import {ContainerComponent} from "../components/container/container.component";
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ReactiveFormsModule } from "@angular/forms"


@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    ButtonsComponent,
    RouterLink,
    ContainerComponent,
    ReactiveFormsModule
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  protected formControl;
  showPassword: boolean = false;
  constructor() {
    this.formControl = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    })
  }

  onSubmit() {
    if (!this.formControl.valid) return
    try {

    }catch (e) {
      if (e instanceof Error) {
        console.error(e.message)
      }
    }
  }
}
