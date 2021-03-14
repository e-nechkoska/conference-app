import { NgModule } from '@angular/core';
import { SpeakersPageComponent } from './pages/speakers-page.component';
import { SpeakersRoutingModule } from './speakers-routing.module';
import { SpeakersService } from './services/speakers.service';
import { SpeakerListComponent } from './components/speaker-list.component';
import { CommonModule } from '@angular/common';
import { SpeakerComponent } from './components/speaker.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SpeakersPageComponent,
    SpeakerListComponent,
    SpeakerComponent
  ],
  providers: [
    SpeakersService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SpeakersRoutingModule,
  ]
})
export class SpeakersModule {

}
