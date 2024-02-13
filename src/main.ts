import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './live-data/live-data.component';
import { CommonModule } from '@angular/common';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AppComponent],
  template: `
    <h1>{{ title }}</h1>
    <app-chat></app-chat>
  `,
})
export class App {
  title = 'Angular Signals for Dynamic Theming ';
}

bootstrapApplication(App, {
  providers: [],
});
