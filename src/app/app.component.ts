import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgClass} from "@angular/common";
import { HeroComponent } from '@pages/client/hero/hero.component'
import {NavBarComponent} from "@app/pages/client/nav-bar/nav-bar.component";
import {ButtonComponent} from "@components/button/button.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, HeroComponent, NavBarComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
