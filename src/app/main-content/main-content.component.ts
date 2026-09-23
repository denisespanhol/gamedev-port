import { Component } from '@angular/core';
import { Homepage } from '../homepage/homepage.component';
import { ProfessionalGames } from '../professional-games/professional-games.component';
import { JamGames } from '../jam-games/jam-games.component';

@Component({
  selector: 'app-main-content',
  imports: [ Homepage, ProfessionalGames, JamGames ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContent {}
