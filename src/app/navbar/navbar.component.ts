import { Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../services/language.service';

const TEXTS = {
  pt: {
    resume: 'Crio experiências através das palavras e personagens que nascem da minha imaginação.',
    aboutMe: 'Sobre mim',
    proGames: 'Jogos Profissionais',
    jamGames: 'Jogos de Game Jam',
  },
  en: {
    resume: 'I create experiences through words and characters born from my imagination.',
    aboutMe: 'About Me',
    proGames: 'Professional Games',
    jamGames: 'Game Jam Games',
  },
};

@Component({
  selector: 'app-navbar',
  imports: [ RouterModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class Navbar {
  protected readonly languageService = inject(LanguageService);
  protected readonly texts = computed(() => TEXTS[this.languageService.language()]);
}
