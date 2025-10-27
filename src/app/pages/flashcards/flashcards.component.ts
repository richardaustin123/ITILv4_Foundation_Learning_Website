import { Component, computed, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FLASHCARDS } from '../../data/flashcards';

@Component({
  selector: 'app-flashcards',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.css']
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
