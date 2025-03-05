import { Component } from '@angular/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-root',
  imports: [SweetAlert2Module],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  sayHello(name: string) {
    console.log("Hello " + name);
  }

  cancelHello() {
    console.log("Cancelled!");
  }
}
