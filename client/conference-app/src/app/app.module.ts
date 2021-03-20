import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SpeakersModule } from './speakers/speakers.module';
import { SessionsModule } from './sessions/sessions.module';
import { SharedModule } from './shared/shared.module';
import { AttendeesModule } from './attendees/attendees.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    SpeakersModule,
    SessionsModule,
    AttendeesModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
