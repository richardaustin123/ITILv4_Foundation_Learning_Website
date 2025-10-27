import { Component, computed, signal } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { QUESTIONS, type Question } from '../../data/questions';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  template: `
    <section class="container" *ngIf="current() as q; else doneBlock">
      <div class="stack">
        <div class="cluster">
          <label for="topic">Topic</label>
          <select id="topic" (change)="setTopic($any($event.target).value)">
            <option value="all">All</option>
            <option *ngFor="let t of topics()" [value]="t">{{ t }}</option>
          </select>
          <button class="btn ghost" (click)="shuffle()">Shuffle</button>
        </div>
        <div class="progress"><span [style.width.%]="progress()"></span></div>

        <article class="card">
          <h2>Question {{ index()+1 }} / {{ total() }}</h2>
          <p class="prompt">{{ q.prompt }}</p>
          <ul class="options" style="list-style:none;padding:0;display:grid;gap:.5rem">
            <li *ngFor="let opt of q.options; let i = index">
              <button
                class="btn secondary option"
                (click)="select(i)"
                [disabled]="answered()"
                [ngClass]="{
                  'is-correct': answered() && i === q.answerIndex,
                  'is-wrong': answered() && !isCorrect() && i === selectedIndex(),
                  'is-selected': i === selectedIndex()
                }"
              >
                {{ i+1 }}. {{ opt }}
              </button>
            </li>
          </ul>
          <div class="feedback" *ngIf="answered()">
            <p [style.color]="isCorrect() ? 'var(--success)' : 'var(--danger)'">
              {{ isCorrect() ? 'Correct!' : 'Not quite.' }}
            </p>
            <p class="explanation" *ngIf="q.explanation">{{ q.explanation }}</p>
            <div class="cluster">
              <span class="tag">Score: {{ score() }} / {{ index()+1 }}</span>
              <button class="btn primary" (click)="next()">Next</button>
            </div>
          </div>
        </article>
      </div>
    </section>

    <ng-template #doneBlock>
      <section class="container">
        <article class="card">
          <h2>All done!</h2>
          <p>You scored {{ score() }} / {{ total() }}.</p>
          <div class="cluster">
            <button class="btn primary" (click)="restart()">Try again</button>
          </div>
        </article>
      </section>
    </ng-template>
  `,
  styles: [
    `
    .option.is-correct{ outline: 2px solid var(--success); outline-offset: 1px; }
    .option.is-wrong{ outline: 2px solid var(--danger); outline-offset: 1px; }
    .option.is-selected{ border-color: var(--primary); }
    `
  ]
})
export class QuizComponent {
  private all = QUESTIONS;
  protected pool = signal<Question[]>(this.all);
  protected topics = computed(() => Array.from(new Set(this.all.map(q => q.topic).filter(Boolean))) as string[]);
  protected index = signal(0);
  protected total = computed(() => this.pool().length);
  protected selectedIndex = signal<number | null>(null);
  protected answered = signal(false);
  protected score = signal(0);

  protected current = computed<Question | undefined>(() => this.pool()[this.index()]);
  protected isCorrect = computed(() => this.selectedIndex() === this.current()?.answerIndex);
  protected progress = computed(() => this.total() ? ((this.index()) / this.total()) * 100 : 0);

  select(i: number){
    if (this.answered()) return;
    this.selectedIndex.set(i);
    this.answered.set(true);
    if (this.isCorrect()) this.score.update(s => s + 1);
  }

  next(){
    this.selectedIndex.set(null);
    this.answered.set(false);
    this.index.update(i => i + 1);
  }

  restart(){
    this.pool.set(this.all);
    this.index.set(0);
    this.selectedIndex.set(null);
    this.answered.set(false);
    this.score.set(0);
  }

  setTopic(topic: string){
    if (topic === 'all') this.pool.set(this.all);
    else this.pool.set(this.all.filter(q => q.topic === topic));
    this.index.set(0);
    this.selectedIndex.set(null);
    this.answered.set(false);
    this.score.set(0);
  }

  shuffle(){
    const arr = [...this.pool()];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    this.pool.set(arr);
    this.index.set(0);
    this.selectedIndex.set(null);
    this.answered.set(false);
  }
}
