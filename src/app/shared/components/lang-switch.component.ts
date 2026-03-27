import { Component, inject } from '@angular/core';
import { CvStateService, type Language } from '../../core/services/cv-state.service';

@Component({
  selector: 'app-lang-switch',
  standalone: true,
  template: `
    <div class="lang-switch">
      <button
        class="btn btn-sm"
        [class.btn-primary]="lang() === 'it'"
        [class.btn-outline-primary]="lang() !== 'it'"
        (click)="setLang('it')"
      >
        IT
      </button>
      <button
        class="btn btn-sm"
        [class.btn-primary]="lang() === 'en'"
        [class.btn-outline-primary]="lang() !== 'en'"
        (click)="setLang('en')"
      >
        EN
      </button>
    </div>
  `,
  styles: [
    `
      .lang-switch {
        position: fixed;
        top: 1rem;
        left: 1rem;
        z-index: 1000;
      }
    `,
  ],
})
export class LangSwitchComponent {
  readonly cvState = inject(CvStateService);
  readonly lang = this.cvState.lang;

  setLang(lang: Language): void {
    this.cvState.setLanguage(lang);
  }
}
