import { Component, computed, effect, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'itil-v4-learning';
  theme = signal<'light'|'dark'>(
    (typeof localStorage !== 'undefined' && (localStorage.getItem('theme') as 'light'|'dark')) || 'light'
  );

  currentPath = signal<string>('');

  constructor(private router: Router){
    effect(() => {
      const t = this.theme();
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', t);
        try { localStorage.setItem('theme', t); } catch {}
      }
    });

    // Track current path for title logic
    const updatePath = () => this.currentPath.set(this.router.url.split('?')[0] || '/');
    updatePath();
    this.router.events.subscribe(ev => { if (ev instanceof NavigationEnd) updatePath(); });
  }

  toggleTheme(){ this.theme.update(v => v === 'light' ? 'dark' : 'light'); }

  pageTitle = computed(() => {
    const url = this.currentPath();
    if (url.startsWith('/quiz')) return 'Quiz';
    if (url.startsWith('/flashcards')) return 'Flashcards';
    return '';
  });
}
