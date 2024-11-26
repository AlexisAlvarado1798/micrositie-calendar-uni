import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'microsite-calendar-uni';
  isDisabled: boolean = false;

  constructor(private router: Router) {
    // Detecta cambios en la ruta y ajusta el estado del botón
    this.router.events.subscribe(() => {
      this.isDisabled = this.router.url === '/login'; // Desactiva si estás en '/login'
    });
  }
}
