import { useSyncExternalStore } from 'react';

// The theme lives on <html class="dark">, set before paint by index.html,
// so every consumer (header toggle, command menu) shares one source of truth.
function readTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

function toggleTheme() {
  const next: Theme = readTheme() === 'dark' ? 'light' : 'dark';
  document.documentElement.classList.toggle('dark', next === 'dark');
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // storage unavailable; the choice still applies for this visit
  }
  listeners.forEach((listener) => listener());
}

function useTheme() {
  const theme = useSyncExternalStore(
    subscribe,
    readTheme,
    () => 'light' as Theme,
  );
  return { theme, toggleTheme };
}

const STORAGE_KEY = 'theme';
const listeners = new Set<() => void>();

export { useTheme, toggleTheme };
export type Theme = 'light' | 'dark';
