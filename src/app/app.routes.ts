import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { FlashcardsComponent } from './pages/flashcards/flashcards.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'quiz', component: QuizComponent },
	{ path: 'flashcards', component: FlashcardsComponent },
	{ path: '**', redirectTo: '' }
];
