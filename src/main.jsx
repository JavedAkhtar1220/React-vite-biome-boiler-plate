import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
import App from '@/App';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./msw/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
