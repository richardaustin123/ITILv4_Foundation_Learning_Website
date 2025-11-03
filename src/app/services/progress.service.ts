import { Injectable, signal } from '@angular/core';

const LS_KEYS = {
  lastUnit: 'itil.lastUnit',
  bestScore: 'itil.bestScore',
  attempts: 'itil.attempts',
} as const;

function readNumber(key: string, fallback: number): number {
  try {
    const v = localStorage.getItem(key);
    const n = v == null ? NaN : Number(v);
    return Number.isFinite(n) ? n : fallback;
  } catch {
    return fallback;
  }
}

@Injectable({ providedIn: 'root' })
export class ProgressService {
  // 1-indexed units; 1 means first unit unlocked.
  lastUnit = signal<number>(readNumber(LS_KEYS.lastUnit, 1));
  bestScore = signal<number>(readNumber(LS_KEYS.bestScore, 0));
  attempts = signal<number>(readNumber(LS_KEYS.attempts, 0));

  private save() {
    try {
      localStorage.setItem(LS_KEYS.lastUnit, String(this.lastUnit()));
      localStorage.setItem(LS_KEYS.bestScore, String(this.bestScore()));
      localStorage.setItem(LS_KEYS.attempts, String(this.attempts()));
    } catch {
      // ignore storage failures
    }
  }

  unlockNextUnit(maxUnits = 10) {
    this.lastUnit.update((n) => {
      const next = Math.min(n + 1, maxUnits);
      queueMicrotask(() => this.save());
      return next;
    });
  }

  recordQuiz(score: number, total: number) {
    this.attempts.update((a) => a + 1);
    this.bestScore.update((b) => (score > b ? score : b));
    this.save();
  }

  resetProgress() {
    this.lastUnit.set(1);
    this.bestScore.set(0);
    this.attempts.set(0);
    this.save();
  }
}
