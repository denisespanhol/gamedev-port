import { Injectable, signal } from '@angular/core';

export type Language = 'pt' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  readonly language = signal<Language>('pt');

  setLanguage(lang: Language): void {
    this.language.set(lang);
  }

  toggleLanguage(): void {
    this.language.update((current) => (current === 'pt' ? 'en' : 'pt'));
  }
}
