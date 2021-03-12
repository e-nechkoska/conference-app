import { NgModule } from '@angular/core';
import { SpeakersComponent } from './components/speakers.component';
import { SpeakersRoutingModule } from './speakers-routing.module';

@NgModule({
  declarations: [
    SpeakersComponent
  ],
  imports: [
    SpeakersRoutingModule
  ]
})
export class SpeakersModule {

}
