import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

const TEXTS = {
  pt: {
    description:
      'Pong Defense foi criado durante a Game Jam Plus 23/24, na engine Godot, seguindo o tema Having Fun Casually. Seu conceito foi pensado para unir o famoso e clássico jogo Pong ao gênero tower defense. Sua narrativa coloca o jogador no controle das goblins feiticeiras Xarlayah e Tiffanyh, que estão defendendo sua vila da invasão de humanos em busca dos recursos naturais do vilarejo. O jogo possui sete níveis e um chefe.',
    bullet1: 'Criei o level design das fases, bem como as mecânicas do jogo;',
    bullet2: 'Criei o design do chefe e das habilidades especiais;',
    bullet3: 'Construí a narrativa apresentada;',
    bullet4: 'Apliquei testes e balanceamento;',
    gameLink: 'Visite a página no Itch.io!',
    backButton: 'Voltar para Jogos de Game Jam',
  },
  en: {
    description:
      "Pong Defense was created during Game Jam Plus 23/24, in the Godot engine, following the theme Having Fun Casually. Its concept was designed to merge the famous classic game Pong with the tower defense genre. Its narrative puts the player in control of the goblin witches Xarlayah and Tiffanyh, who are defending their village from a human invasion seeking the village's natural resources. The game features seven levels and one boss.",
    bullet1: 'Created the level design for the stages, as well as the game mechanics;',
    bullet2: 'Designed the boss and its special abilities;',
    bullet3: 'Built the narrative presented in the game;',
    bullet4: 'Applied testing and balancing;',
    gameLink: 'Visit the Itch.io page!',
    backButton: 'Back to Game Jam Games',
  },
};

@Component({
  selector: 'app-pong-defense-page',
  imports: [RouterLink],
  templateUrl: './pong-defense-page.component.html',
  styleUrl: './pong-defense-page.component.scss',
})
export class PongDefensePage {
  protected readonly languageService = inject(LanguageService);
  protected readonly texts = computed(() => TEXTS[this.languageService.language()]);
}
