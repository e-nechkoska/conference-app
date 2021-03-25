import { NgModule } from '@angular/core';
import { AttendeesPageComponent } from './pages/attendees-page.component';
import { AttendeesService } from './services/attendees.service';
import { AttendeesRoutingModule } from './attendees-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AttendeeListItemComponent } from './components/attendee-list-item.component';
import { AttendeeListComponent } from './components/attendee-list.component';
import { AttendeesResolver } from './resolvers/attendees.resolver';
import { AttendeePageComponent } from './pages/attendee-page.component';
import { AttendeeResolver } from './resolvers/attendee.resolver';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AttendeesPageComponent,
    AttendeeListItemComponent,
    AttendeeListComponent,
    AttendeePageComponent
  ],
  providers: [
    AttendeesService,
    AttendeesResolver,
    AttendeeResolver
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AttendeesRoutingModule,
    ReactiveFormsModule
  ]
})
export class AttendeesModule {

}
