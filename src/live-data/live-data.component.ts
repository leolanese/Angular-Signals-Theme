import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThemeService } from './live-data.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  template: `
   <button (click)="toggleTheme()">Toggle Theme</button>
     Theme: {{ themeService.themeSignal() }}

     <div [ngClass]="themeService.themeSignal()" class="container">
      <p>This is some text content</p>
      <p>Another paragraph of content.</p>
      <button>This is another themed button</button>
    </div>
  `,
  styleUrls: ['./css/light-theme.css', './css/dark-theme.css'],
  providers: [ThemeService, CommonModule],
})
export class AppComponent {
  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
