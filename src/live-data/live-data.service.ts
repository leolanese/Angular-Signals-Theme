import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme: string = 'dark-theme';

  themeSignal = signal<string>(this.currentTheme);

  setTheme(theme: string) {
    this.currentTheme = theme;
    this.themeSignal.set(this.currentTheme);
  }

  toggleTheme() {
    this.currentTheme =
      this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.themeSignal.set(this.currentTheme);
  }
}
