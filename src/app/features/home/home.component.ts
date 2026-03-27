import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvStateService } from '../../core/services/cv-state.service';
import { cvData } from '../../core/data/cv-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly cvState = inject(CvStateService);
  readonly personal = cvData.personal;
  readonly socials = cvData.socials;

  onFrecciaClick(): void {
    this.cvState.toggleBio();
  }

  onPortfolioClick(): void {
    this.cvState.togglePortfolio();
  }

  get googleMapsUrl(): string {
    return 'https://www.google.it/maps/place/30029+San+Stino+di+Livenza+VE/@45.7284071,12.6784291,14z/data=!3m1!4b1!4m5!3m4!1s0x477be21c74d32c2b:0x44096dbff557a930!8m2!3d45.7297158!4d12.6813746';
  }

  get whatsappUrl(): string {
    return `https://wa.me/${this.personal.phone.replace(/\+|\s/g, '')}`;
  }

  get cvPdfUrl(): string {
    return 'assets/CV-DEV - Andrea MAzzarotto.pdf';
  }
}
