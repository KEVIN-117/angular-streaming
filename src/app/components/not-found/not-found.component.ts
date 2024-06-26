import { Component } from '@angular/core';
import {ContainerComponent} from "../Auth/components/container/container.component";
import {RouterLink} from "@angular/router";
import {ButtonComponent} from "../../../../../angular-streaming/src/app/components/button/button.component";
import {ButtonProps} from "../../../../../angular-streaming/src/app/components/button/types";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    ContainerComponent,
    RouterLink,
    ButtonComponent
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  buttonProps: ButtonProps = {
    text: "Volver al inicio",
    variant: "link",
    icon: `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd"/>
</svg>
`
  }
}
