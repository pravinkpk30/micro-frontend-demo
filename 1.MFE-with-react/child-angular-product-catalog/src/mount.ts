import 'zone.js';
import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

const mount = (el: HTMLElement) => {
  // Create the app-root element dynamically
  const appRoot = document.createElement('app-root');
  el.appendChild(appRoot);

  bootstrapApplication(AppComponent)
    .catch((err) => console.error(err));
};

export { mount };
