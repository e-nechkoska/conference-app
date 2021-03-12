import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[caClickAlert]'
})
export class ClickAlertDirective {

  @HostListener('click')
  onClick() {
    alert("Mnogu klikas");
  }

}
