import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionsPageComponent } from './pages/sessions-page.component';
import { SessionsResolver } from './resolvers/sessions.resolver';
import { SessionPageComponent } from './pages/session-page.component';
import { SessionResolver } from './resolvers/session.resolver';

const routes: Routes = [
  {
    path: 'sessions',
    component: SessionsPageComponent,
    resolve: {
      sessions: SessionsResolver
    }
  },
  {
    path: 'session/:sessionId',
    component: SessionPageComponent,
    resolve: {
      session: SessionResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule {
}
