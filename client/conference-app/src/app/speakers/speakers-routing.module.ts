import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeakersPageComponent } from './pages/speakers-page.component';
import { SpeakersResolver } from './resolvers/speakers.resolver';
import { SpeakerPageComponent } from './pages/speaker-page.component';
import { SpeakerResolver } from './resolvers/speaker.resolver';

const routes: Routes = [
  {
    path: 'speakers',
    component: SpeakersPageComponent,
    resolve: {
      speakers: SpeakersResolver
    }
  },
  {
    path: 'speaker/:speakerId',
    component: SpeakerPageComponent,
    resolve: {
      speaker: SpeakerResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakersRoutingModule { }
