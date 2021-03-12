import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickAlertDirective } from './directives/click-alert.directive';

@NgModule({
  declarations: [
    HighlightDirective,
    ClickAlertDirective
  ],
  exports: [
    HighlightDirective,
    ClickAlertDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
