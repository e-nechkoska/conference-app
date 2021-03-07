import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeakerService } from './speaker.service';
import { SpeakersComponent } from './speakers.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeakersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SpeakerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
