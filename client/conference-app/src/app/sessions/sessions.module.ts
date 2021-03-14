import { NgModule } from '@angular/core';
import { SessionsPageComponent } from './pages/sessions-page.component';
import { SessionsRoutingModule } from './sessions-routing.module';
import { SessionsService } from './services/sessions.service';
import { SessionListComponent } from './components/session-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SessionListItemComponent } from './components/session-list-item.component';
import { SelectedSessionComponent } from './components/selected-session.component';

@NgModule({
  declarations: [
    SessionsPageComponent,
    SessionListComponent,
    SessionListItemComponent,
    SelectedSessionComponent
  ],
  providers: [
    SessionsService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SessionsRoutingModule
  ]
})
export class SessionsModule {

}
