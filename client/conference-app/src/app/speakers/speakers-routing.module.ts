import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeakersPageComponent } from './pages/speakers-page.component';

const routes: Routes = [
  {
    path: 'speakers',
    component: SpeakersPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakersRoutingModule { }
