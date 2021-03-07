import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeakersComponent } from './speakers/components/speakers.component';
import { SessionsComponent } from './sessions/components/sessions.component';

const routes: Routes = [
  {
    path: 'speakers',
    component: SpeakersComponent
  },
  {
    path: 'sessions',
    component: SessionsComponent
  },
  {
    path: '**',
    redirectTo: '/speakers'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
