import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Hello from App Component'; // property -> {{ title }}
  name = 'Angular';
  age = 30;

  // method -> event binding (click)
  sayHello() {
    alert('Hello from App Component');
    console.log('Hello from App Component');
  }

  delete() {
    console.log('Delete button clicked');
  }
}
