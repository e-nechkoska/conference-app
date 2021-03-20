import { NgModule } from '@angular/core';
import { SessionsPageComponent } from './pages/sessions-page.component';
import { SessionsRoutingModule } from './sessions-routing.module';
import { SessionsService } from './services/sessions.service';
import { SessionListComponent } from './components/session-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SessionListItemComponent } from './components/session-list-item.component';
import { SelectedSessionComponent } from './components/selected-session.component';
import { SessionsResolver } from './resolvers/sessions.resolver';
import { SessionPageComponent } from './pages/session-page.component';
import { SessionFormComponent } from './components/session-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SessionResolver } from './resolvers/session.resolver';

@NgModule({
  declarations: [
    SessionsPageComponent,
    SessionListComponent,
    SessionListItemComponent,
    SelectedSessionComponent,
    SessionPageComponent,
    SessionFormComponent
  ],
  providers: [
    SessionsService,
    SessionsResolver,
    SessionResolver
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SessionsRoutingModule
  ]
})
export class SessionsModule {

}
