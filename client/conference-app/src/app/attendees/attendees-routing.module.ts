import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AttendeesPageComponent } from './pages/attendees-page.component';

const routes: Routes = [
  {
    path: 'attendees',
    component: AttendeesPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendeesRoutingModule {
}
