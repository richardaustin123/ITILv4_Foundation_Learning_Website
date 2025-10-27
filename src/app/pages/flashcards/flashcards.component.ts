import { Component, computed, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FLASHCARDS } from '../../data/flashcards';

@Component({
  selector: 'app-flashcards',
  standalone: true,
  imports: [NgIf, NgFor],
  template: `
    <section class="container" *ngIf="current(); else empty">
      <div class="cluster">
        <label for="topic">Topic</label>
  <select id="topic" (change)="setTopic($any($event.target).value)">
          <option value="all">All</option>
          <option *ngFor="let t of topics()" [value]="t">{{ t }}</option>
        </select>
        <button class="btn ghost" (click)="shuffle()">Shuffle</button>
      </div>
      <article class="card flip" (click)="flip()" [class.is-flipped]="flipped()">
        <div class="flip-inner">
          <div class="flip-face front">
            <h2>{{ current().front }}</h2>
            <p class="tag" *ngIf="current().topic">{{ current().topic }}</p>
          </div>
          <div class="flip-face back">
            <h2>Answer</h2>
            <p>{{ current().back }}</p>
          </div>
        </div>
      </article>
      <div class="cluster">
        <button class="btn secondary" (click)="prev()" [disabled]="index()===0">Prev</button>
        <span class="tag">{{ index()+1 }} / {{ total() }}</span>
        <button class="btn primary" (click)="next()" [disabled]="index()===total()-1">Next</button>
      </div>
    </section>
    <ng-template #empty>
      <section class="container"><p>No flashcards available.</p></section>
    </ng-template>
  `,
  styles: [
    `
    .container{max-width:800px;margin:2rem auto;padding:1rem}
    .flip{ perspective: 1000px; cursor: pointer; }
    .flip-inner{ position: relative; transform-style: preserve-3d; transition: transform .6s; }
    .flip.is-flipped .flip-inner{ transform: rotateY(180deg); }
    .flip-face{ min-height: 180px; display:flex; flex-direction: column; justify-content:center; align-items:center; backface-visibility: hidden; }
    .flip-face.back{ transform: rotateY(180deg); }
    `
  ]
})
export class FlashcardsComponent{
  private all = FLASHCARDS;
  protected pool = signal(this.all);
  protected topics = computed(() => Array.from(new Set(this.all.map(c => c.topic).filter(Boolean))) as string[]);
  protected index = signal(0);
  protected total = computed(() => this.pool().length);
  protected flipped = signal(false);
  protected current = computed(()=> this.pool()[this.index()]);
  next(){ this.index.update(i => Math.min(i+1, this.total()-1)); this.flipped.set(false); }
  prev(){ this.index.update(i => Math.max(i-1, 0)); this.flipped.set(false); }
  flip(){ this.flipped.update(v => !v); }
  setTopic(topic: string){
    if (topic === 'all') this.pool.set(this.all); else this.pool.set(this.all.filter(c => c.topic === topic));
    this.index.set(0); this.flipped.set(false);
  }
  shuffle(){
    const arr = [...this.pool()];
    for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
    this.pool.set(arr); this.index.set(0); this.flipped.set(false);
  }
}
