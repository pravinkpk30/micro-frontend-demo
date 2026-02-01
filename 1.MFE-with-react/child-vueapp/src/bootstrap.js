import { mount } from './mount';

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#app');
  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mount };
