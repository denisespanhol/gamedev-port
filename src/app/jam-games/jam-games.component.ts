import { Component, computed, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LanguageService } from '../services/language.service';

const TEXTS = {
  pt: {
    title: 'Jogos de Game Jam',
  },
  en: {
    title: 'Game Jam Games',
  },
};

@Component({
  selector: 'app-jam-games',
  imports: [ RouterLink ],
  templateUrl: './jam-games.component.html',
  styleUrl: './jam-games.component.scss',
})
export class JamGames {
  protected readonly languageService = inject(LanguageService);
  protected readonly texts = computed(() => TEXTS[this.languageService.language()]);
}
