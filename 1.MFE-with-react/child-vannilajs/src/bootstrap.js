import { mount } from './userProfile';

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#dev-user-profile-root');
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
