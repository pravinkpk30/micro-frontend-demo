import 'zone.js';
import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// Minimal bootstrap for dev mode
if (document.querySelector('app-root')) {
  bootstrapApplication(AppComponent)
    .catch((err) => console.error(err));
}
