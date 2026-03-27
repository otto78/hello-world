import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvStateService } from './core/services/cv-state.service';
import { HomeComponent } from './features/home/home.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { ThemeToggleComponent } from './shared/components/theme-toggle.component';
import { LangSwitchComponent } from './shared/components/lang-switch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent, PortfolioComponent, ThemeToggleComponent, LangSwitchComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly cvState = inject(CvStateService);
  protected readonly title = signal('Andrea Mazzarotto - CV');

  get containerClasses(): { [key: string]: boolean } {
    return {
      'dark-theme': this.cvState.darkMode(),
    };
  }
}
