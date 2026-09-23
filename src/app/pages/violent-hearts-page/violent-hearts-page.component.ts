import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

const TEXTS = {
  pt: {
    description:
      'Violent Hearts foi desenvolvido durante a Ctrl Alt Jam #2, na engine Unity, seguindo o tema Conflito e Dualidade. Foi o primeiro jogo digital criado por mim e pelas pessoas que compuseram o time. O jogo foi pensado para ser um metroidvania curto e desafiador, com uma mecânica de troca de estados (ira e calma). A narrativa do jogo apresenta um opilião morto que retorna à vida carregando o desejo de vingança de seu povo. Esse desejo é capaz de consumir o herói, transformando seu corpo e o tornando violentamente capaz de enfrentar seus inimigos.',
    bullet1: 'Criei a mecânica de combate e trabalhei no design geral do jogo;',
    bullet2: 'Fiz parte do time de programação;',
    bullet3: 'Construí a narrativa apresentada;',
    gameLink: 'Visite a página no Itch.io!',
    backButton: 'Voltar para Jogos de Game Jam',
  },
  en: {
    description:
      'Violent Hearts was developed during Ctrl Alt Jam #2, in the Unity engine, following the theme Conflict and Duality. It was the first digital game created by me and the people who made up the team. The game was designed to be a short, challenging metroidvania, with a mechanic for switching between states (wrath and calm). The game\'s narrative follows a dead harvestman that returns to life carrying its people\'s desire for revenge. This desire is capable of consuming the hero, transforming his body and making him violently capable of facing his enemies.',
    bullet1: "Created the combat mechanic and worked on the game's overall design;",
    bullet2: 'Was part of the programming team;',
    bullet3: 'Built the narrative presented in the game;',
    gameLink: 'Visit the Itch.io page!',
    backButton: 'Back to Game Jam Games',
  },
};

@Component({
  selector: 'app-violent-hearts-page',
  imports: [RouterLink],
  templateUrl: './violent-hearts-page.component.html',
  styleUrl: './violent-hearts-page.component.scss',
})
export class ViolentHeartsPage {
  protected readonly languageService = inject(LanguageService);
  protected readonly texts = computed(() => TEXTS[this.languageService.language()]);
}
