import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionsPageComponent } from './pages/sessions-page.component';
import { SessionsResolver } from './resolvers/sessions.resolver';

const routes: Routes = [
  {
    path: 'sessions',
    component: SessionsPageComponent,
    resolve: {
      sessions: SessionsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule {
}
