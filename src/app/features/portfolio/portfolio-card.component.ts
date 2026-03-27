import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Project } from '../../core/types/cv.types';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card mb-3 my-shadow">
      <div class="row no-gutters">
        <div class="col-5 col-sm-4">
          <img [src]="'assets/' + project.image" [alt]="project.title" class="portfolio-card-img" />
        </div>
        <div class="col-7 col-sm-8">
          <div class="card-body">
            <a [href]="project.link" target="_blank" class="stretched-link">
              <h4 class="card-title">{{ project.title }}</h4>
            </a>
            <p class="card-text">{{ project.description }}</p>
            <p class="card-text"><small class="text-muted">{{ project.tech.join(', ') }}</small></p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .portfolio-card-img {
        width: 150px;
        height: 200px;
        object-fit: cover;
        border-radius: 0.25rem 0 0 0.25rem;
      }
    `,
  ],
})
export class PortfolioCardComponent {
  @Input({ required: true }) project!: Project;
}
