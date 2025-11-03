import { Component, computed, signal } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { QUESTIONS, type Question } from '../../data/questions';
import { ActivatedRoute } from '@angular/router';
import { ProgressService } from '../../services/progress.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
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
  protected progressPct = computed(() => this.total() ? ((this.index()) / this.total()) * 100 : 0);

  constructor(private route: ActivatedRoute, private progressSvc: ProgressService) {
    const topic = this.route.snapshot.queryParamMap.get('topic');
    if (topic) {
      this.setTopic(topic);
    }
  }

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
    if (this.index() >= this.total()) {
      // just in case of off-by-one, guard in done block as well
  this.progressSvc.recordQuiz(this.score(), this.total());
  this.progressSvc.unlockNextUnit();
    }
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

  // Heuristic: if all options are <= 22 chars and <= 2 words, treat as short
  isShortOptions(options: string[]): boolean {
    if (!options || options.length !== 4) return false;
    return options.every(opt => opt.length <= 22 && (opt.trim().split(/\s+/).length <= 3));
  }
}
