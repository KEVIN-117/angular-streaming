import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  isOpen = false;
  isPanelOpen = false;

  open() {
    this.isOpen = true;
    setTimeout(() => {
      this.isPanelOpen = true;
    }, 10);
  }

  close() {
    this.isPanelOpen = false;
    setTimeout(() => {
      this.isOpen = false;
    }, 500);
  }

}
