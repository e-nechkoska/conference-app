import { NgModule } from '@angular/core';
import { AttendeesPageComponent } from './pages/attendees-page.component';
import { AttendeesService } from './services/attendees.service';
import { AttendeesRoutingModule } from './attendees-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AttendeesPageComponent,
  ],
  providers: [
    AttendeesService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AttendeesRoutingModule
  ]
})
export class AttendeesModule {

}
