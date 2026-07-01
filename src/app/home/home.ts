import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name = 'Nguyen Van A';
  age = 25;
  message = '';

  showMessage(): void {
    this.message = 'Bạn đã click button';
  }
}
