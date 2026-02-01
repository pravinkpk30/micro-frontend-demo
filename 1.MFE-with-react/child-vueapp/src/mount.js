import { createApp } from 'vue';
import App from './App.vue';

const mount = (el) => {
  const app = createApp(App);
  app.mount(el);
};

export { mount };
