import { Component, computed, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LanguageService } from '../services/language.service';

const TEXTS = {
  pt: {
    title: 'Jogos Profissionais',
  },
  en: {
    title: 'Professional Games',
  },
};

@Component({
  selector: 'app-professional-games',
  imports: [RouterLink],
  templateUrl: './professional-games.component.html',
  styleUrl: './professional-games.component.scss',
})
export class ProfessionalGames {
  protected readonly languageService = inject(LanguageService);
  protected readonly texts = computed(() => TEXTS[this.languageService.language()]);
}
