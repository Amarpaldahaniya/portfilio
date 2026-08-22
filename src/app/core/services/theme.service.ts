import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  readonly isDark = signal<boolean>(true);
  readonly isCommandPaletteOpen = signal<boolean>(false);
  readonly selectedProjectForModal = signal<any | null>(null);

  constructor() {
    this.initTheme();
  }

  private initTheme(): void {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.add('dark');
    }
  }

  toggleTheme(): void {
    this.isDark.update(v => !v);
    if (typeof window !== 'undefined') {
      if (this.isDark()) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }

  openCommandPalette(): void {
    this.isCommandPaletteOpen.set(true);
  }

  closeCommandPalette(): void {
    this.isCommandPaletteOpen.set(false);
  }

  openProjectModal(project: any): void {
    this.selectedProjectForModal.set(project);
  }

  closeProjectModal(): void {
    this.selectedProjectForModal.set(null);
  }
}
