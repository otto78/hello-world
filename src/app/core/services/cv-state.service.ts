import { Injectable, signal, computed, Signal, WritableSignal } from '@angular/core';

export type DevMode = 'sx' | 'dx';
export type FrecciaMode = 'downLeft' | 'x';
export type Language = 'it' | 'en';

interface CvState {
  showJobs: boolean;
  showBio: boolean;
  imgFiltered: boolean;
  devMode: DevMode;
  frecciaMode: FrecciaMode;
}

@Injectable({ providedIn: 'root' })
export class CvStateService {
  // Stato privato
  private readonly showJobsSignal: WritableSignal<boolean> = signal(false);
  private readonly showBioSignal: WritableSignal<boolean> = signal(false);
  private readonly imgFilteredSignal: WritableSignal<boolean> = signal(false);
  private readonly devModeSignal: WritableSignal<DevMode> = signal('sx');
  private readonly frecciaModeSignal: WritableSignal<FrecciaMode> = signal('downLeft');
  private readonly darkModeSignal: WritableSignal<boolean> = signal(false);
  private readonly langSignal: WritableSignal<Language> = signal('it');

  // Signals pubbliche (read-only per i componenti)
  readonly showJobs: Signal<boolean> = this.showJobsSignal.asReadonly();
  readonly showBio: Signal<boolean> = this.showBioSignal.asReadonly();
  readonly imgFiltered: Signal<boolean> = this.imgFilteredSignal.asReadonly();
  readonly devMode: Signal<DevMode> = this.devModeSignal.asReadonly();
  readonly frecciaMode: Signal<FrecciaMode> = this.frecciaModeSignal.asReadonly();
  readonly darkMode: Signal<boolean> = this.darkModeSignal.asReadonly();
  readonly lang: Signal<Language> = this.langSignal.asReadonly();

  // Computed per classi CSS
  readonly cardHidden: Signal<boolean> = computed(() => this.showJobs());
  readonly jobsHidden: Signal<boolean> = computed(() => !this.showJobs());
  readonly bioClasses: Signal<{ 'd-none': boolean; 'fade-in': boolean }> = computed(() => ({
    'd-none': !this.showBio(),
    'fade-in': this.showBio(),
  }));
  readonly devClasses: Signal<string> = computed(() => (this.devMode() === 'sx' ? 'dev-sx' : 'dev-dx'));
  readonly frecciaIcon: Signal<string> = computed(() =>
    this.frecciaMode() === 'downLeft' ? 'bi-arrow-down-left' : 'bi-x-lg',
  );
  readonly imgFilterClass: Signal<string> = computed(() => (this.imgFiltered() ? 'filter' : ''));

  // Azione #freccia - toggle bio
  toggleBio(): void {
    const currentlyInJobs = this.showJobsSignal();

    // Toggle stati base
    this.devModeSignal.update((mode) => (mode === 'sx' ? 'dx' : 'sx'));
    this.frecciaModeSignal.update((mode) => (mode === 'downLeft' ? 'x' : 'downLeft'));
    this.imgFilteredSignal.update((filtered) => !filtered);
    this.showBioSignal.update((bio) => !bio);

    // Caso speciale: se siamo in jobs, torniamo a card
    if (currentlyInJobs) {
      this.showJobsSignal.set(false);
      this.imgFilteredSignal.set(false);
      this.showBioSignal.set(false);
    }
  }

  // Azione #portfolioBtn - toggle portfolio/jobs
  togglePortfolio(): void {
    if (this.imgFilteredSignal()) {
      // Caso A: img ha filter -> passa da bio a jobs
      this.imgFilteredSignal.set(false);
      this.showJobsSignal.set(true);
      this.showBioSignal.set(false);
    } else {
      // Caso B: toggle card/jobs + dev + freccia
      this.devModeSignal.update((mode) => (mode === 'sx' ? 'dx' : 'sx'));
      this.frecciaModeSignal.update((mode) => (mode === 'downLeft' ? 'x' : 'downLeft'));
      this.showJobsSignal.update((jobs) => !jobs);
    }
  }

  // Azione #backBtn - torna a card
  goBack(): void {
    this.showJobsSignal.set(false);
    this.devModeSignal.update((mode) => (mode === 'sx' ? 'dx' : 'sx'));
    // Nota: non cambiamo frecciaMode, rimane lo stato corrente
  }

  // Dark mode
  toggleDarkMode(): void {
    this.darkModeSignal.update((dark) => !dark);
  }

  // Lingua
  setLanguage(lang: Language): void {
    this.langSignal.set(lang);
  }
}
