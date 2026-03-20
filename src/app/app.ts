import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Homepage } from './homepage/homepage.component';
import { Navbar } from './navbar/navbar.component';
import { ProfessionalGames } from "./professional-games/professional-games.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Homepage, Navbar, ProfessionalGames],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portolio-gamedev');
}
