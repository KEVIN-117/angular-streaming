import {Component, Input} from '@angular/core';
import {ButtonProps} from "./types";

import { HtmlTransformPipe } from "@/app/core/pipes/html-transform.pipe"

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    HtmlTransformPipe
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() buttonProps!: ButtonProps;

  constructor() {
  }
}
