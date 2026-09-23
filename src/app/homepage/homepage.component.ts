import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';

const TEXTS = {
  pt: {
    paragraph1: 'Sou um designer de narrativa júnior, cheio de ideias e paixão por criar! Sou graduado em Pedagogia pela Unisal, graduando em Jogos Digitais pela Fatec-AM e especialista em Narrativa Artística pela A Casa Tombada.',
    paragraph2: 'Migrei do campo das artes cênicas (onde atuei como ator, dramaturgo e arte-educador) para o campo da tecnologia, buscando aprender sobre programação e desenvolvimento de jogos de forma geral.',
    paragraph3Before: 'Atualmente, tenho a honra de estagiar como desenvolvedor na CI&T e de trabalhar no desenvolvimento do jogo ',
    paragraph3Word: 'Between Heaven and Hell',
    paragraph3After: ', um RPG de fantasia sombria inspirado em Clair Obscur: Expedition 33 e Persona 2.',
  },
  en: {
    paragraph1: "I'm a junior narrative designer, full of ideas and a passion for creating! I hold a degree in Pedagogy from Unisal, I'm currently studying Digital Games at Fatec-AM, and I'm a specialist in Artistic Narrative from A Casa Tombada.",
    paragraph2: 'I moved from the performing arts field (where I worked as an actor, playwright, and arts educator) into technology, seeking to learn about programming and game development in general.',
    paragraph3Before: "Currently, I have the honor of interning as a developer at CI&T and working on the development of the game ",
    paragraph3Word: 'Between Heaven and Hell',
    paragraph3After: ', a dark fantasy RPG inspired by Clair Obscur: Expedition 33 and Persona 2.',
  },
};

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class Homepage {
  protected readonly languageService = inject(LanguageService);
  protected readonly texts = computed(() => TEXTS[this.languageService.language()]);
}
