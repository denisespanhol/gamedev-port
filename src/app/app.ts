import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Homepage } from './homepage/homepage.component';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, Homepage ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portolio-gamedev');
}
