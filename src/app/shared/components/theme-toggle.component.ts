import { Component, inject } from '@angular/core';
import { CvStateService } from '../../core/services/cv-state.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  template: `
    <button class="btn btn-sm btn-outline-secondary" (click)="toggleTheme()" aria-label="Toggle theme">
      @if (darkMode()) {
        <i class="bi bi-sun-fill"></i>
      } @else {
        <i class="bi bi-moon-fill"></i>
      }
    </button>
  `,
  styles: [
    `
      button {
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 1000;
      }
    `,
  ],
})
export class ThemeToggleComponent {
  readonly cvState = inject(CvStateService);
  readonly darkMode = this.cvState.darkMode;

  toggleTheme(): void {
    this.cvState.toggleDarkMode();
  }
}
