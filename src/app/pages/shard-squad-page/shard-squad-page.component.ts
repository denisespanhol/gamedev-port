import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

const TEXTS = {
  pt: {
    description:
      'Contribuí criativamente para o desenvolvimento do jogo, colaborando com programadores e artistas enquanto seguia a visão do diretor do projeto. Junto com outros membros da The Root Studio, criamos conteúdos para aprimorar o Core Loop e tornar Shard Squad um destaque em seu gênero.',
    bullet1: 'Auxiliei na criação de mecânicas para personagens jogáveis, inimigos, chefes e fases;',
    bullet2: 'Desenvolvi a história do jogo, garantindo coesão e consistência com a jogabilidade;',
    bullet3:
      "Escrevi 32 contos curtos, utilizados no jogo como conteúdos desbloqueáveis, assim como o bestiário com todas as criaturas e NPC's;",
    bullet4: 'Colaborei na criação de itens equipáveis e na escrita de suas descrições;',
    bullet5: 'Participei dos testes e do balanceamento;',
    gameLink: 'Visite a página na Steam!',
    backButton: 'Voltar para Jogos Profissionais',
  },
  en: {
    description:
      "I contributed creatively to the game's development, collaborating with programmers and artists while following the project director's vision. Together with other members of The Root Studio, we created content to enhance the Core Loop and make Shard Squad stand out in its genre.",
    bullet1: 'Helped create mechanics for playable characters, enemies, bosses, and levels;',
    bullet2: "Developed the game's story, ensuring cohesion and consistency with the gameplay;",
    bullet3:
      'Wrote 32 short stories used in-game as unlockable content, as well as the bestiary featuring all creatures and NPCs;',
    bullet4: 'Collaborated on the creation of equippable items and the writing of their descriptions;',
    bullet5: 'Participated in testing and balancing;',
    gameLink: 'Visit the Steam page!',
    backButton: 'Back to Professional Games',
  },
};

@Component({
  selector: 'app-shard-squad-page',
  imports: [RouterLink],
  templateUrl: './shard-squad-page.component.html',
  styleUrl: './shard-squad-page.component.scss',
})
export class ShardSquadPage {
  protected readonly languageService = inject(LanguageService);
  protected readonly texts = computed(() => TEXTS[this.languageService.language()]);
}
