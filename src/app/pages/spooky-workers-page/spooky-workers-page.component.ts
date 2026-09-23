import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

const TEXTS = {
  pt: {
    description:
      'Spooky Workers é um protótipo criado na Unity com recursos da Lei Paulo Gustavo, em 2024. O conceito do jogo se inspira na série Scooby-Doo para trazer alívio cômico a um contexto “assustador”. O jogo é um puzzle platformer que se concentra na vida de um estagiário medroso de uma casa de horrores, que precisa assustar os clientes com sucesso (sem assustar a si mesmo) para conseguir ser efetivado no emprego.',
    bullet1: 'Criei o level design das fases, bem como as mecânicas do jogo;',
    bullet2: 'Construí a narrativa e a história do jogo;',
    bullet3: 'Auxiliei na programação das mecânicas e em outras necessidades;',
    bullet4: 'Participei dos testes e do balanceamento;',
    gameLink: 'Visite a página no Itch.io!',
    backButton: 'Voltar para Jogos Profissionais',
  },
  en: {
    description:
      'Spooky Workers is a prototype created in Unity with funding from the Paulo Gustavo Law, in 2024. The game\'s concept draws inspiration from the Scooby-Doo series to bring comic relief to a "scary" setting. It\'s a puzzle platformer centered on the life of a fearful intern at a haunted house, who needs to successfully scare customers (without scaring himself) in order to get hired full-time.',
    bullet1: 'Created the level design for the stages, as well as the game mechanics;',
    bullet2: "Built the game's narrative and story;",
    bullet3: 'Helped program the mechanics and other needs;',
    bullet4: 'Participated in testing and balancing;',
    gameLink: 'Visit the Itch.io page!',
    backButton: 'Back to Professional Games',
  },
};

@Component({
  selector: 'app-spooky-workers-page',
  imports: [RouterLink],
  templateUrl: './spooky-workers-page.component.html',
  styleUrl: './spooky-workers-page.component.scss',
})
export class SpookyWorkersPage {
  protected readonly languageService = inject(LanguageService);
  protected readonly texts = computed(() => TEXTS[this.languageService.language()]);
}
