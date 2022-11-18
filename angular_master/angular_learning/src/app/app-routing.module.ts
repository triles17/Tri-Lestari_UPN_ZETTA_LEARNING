import { ContentAboutComponent } from './about/content-about/content-about.component';
import { ContentActorComponent } from './actor/content-actor/content-actor.component';
import { ContentMovieComponent } from './movie/content-movie/content-movie.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'movie', component: ContentMovieComponent },
  { path: 'actor', component: ContentActorComponent },
  { path: 'about/:id', component: ContentAboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
