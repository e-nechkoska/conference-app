import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[caHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() color = 'red';

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'background', this.color);
  }

}
