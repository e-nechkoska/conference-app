import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AttendeesPageComponent } from './pages/attendees-page.component';
import { AttendeesResolver } from './resolvers/attendees.resolver';
import { AttendeePageComponent } from './pages/attendee-page.component';
import { AttendeeResolver } from './resolvers/attendee.resolver';

const routes: Routes = [
  {
    path: 'attendees',
    component: AttendeesPageComponent,
    resolve: {
      attendees: AttendeesResolver
    }
  },
  {
    path: 'attendee/:attendeeId',
    component: AttendeePageComponent,
    resolve: {
      attendee: AttendeeResolver
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendeesRoutingModule {
}
