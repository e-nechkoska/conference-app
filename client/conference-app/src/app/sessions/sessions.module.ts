import { NgModule } from '@angular/core';
import { SessionsPageComponent } from './pages/sessions-page.component';
import { SessionsRoutingModule } from './sessions-routing.module';
import { SessionsService } from './services/sessions.service';
import { SessionListComponent } from './components/session-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SessionComponent } from './components/session.component';

@NgModule({
  declarations: [
    SessionsPageComponent,
    SessionListComponent,
    SessionComponent
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
