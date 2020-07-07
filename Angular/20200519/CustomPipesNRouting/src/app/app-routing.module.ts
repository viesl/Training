import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SentencesComponent } from './sentences/sentences.component';
import { ExponentialComponent } from './exponential/exponential.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: SentencesComponent},
  { path: 'exponential', component: ExponentialComponent },
  { path: 'sentences', component: SentencesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
