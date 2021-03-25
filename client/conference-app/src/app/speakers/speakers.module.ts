import { NgModule } from '@angular/core';
import { SpeakersPageComponent } from './pages/speakers-page.component';
import { SpeakersRoutingModule } from './speakers-routing.module';
import { SpeakersService } from './services/speakers.service';
import { SpeakerListComponent } from './components/speaker-list.component';
import { CommonModule } from '@angular/common';
import { SpeakerComponent } from './components/speaker.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectedSpeakerComponent } from './components/selected-speaker.component';
import { SpeakersResolver } from './resolvers/speakers.resolver';
import { SpeakerPageComponent } from './pages/speaker-page.component';
import { SpeakerResolver } from './resolvers/speaker.resolver';
import { SpeakerFromComponent } from './components/speaker-from.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SpeakersPageComponent,
    SpeakerListComponent,
    SpeakerComponent,
    SelectedSpeakerComponent,
    SpeakerPageComponent,
    SpeakerFromComponent
  ],
  providers: [
    SpeakersService,
    SpeakersResolver,
    SpeakerResolver
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SpeakersRoutingModule,
    ReactiveFormsModule,
  ]
})
export class SpeakersModule {

}
