import {Component, ContentChild, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {
  @Input() children!: HTMLElement;
  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>
  hasContent = false;
  constructor() {
    this.hasContent = !!this.templateRef;
  }

}
