import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvStateService } from '../../core/services/cv-state.service';
import { PortfolioCardComponent } from './portfolio-card.component';
import { cvData } from '../../core/data/cv-data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, PortfolioCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  readonly cvState = inject(CvStateService);
  readonly projects = cvData.projects;

  onBackClick(): void {
    this.cvState.goBack();
  }

  get imgClasses(): { [key: string]: boolean } {
    return { 'card-img rounded-circle': true, filter: this.cvState.imgFiltered() };
  }
}
