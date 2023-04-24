import { Directive, ElementRef, HostListener, ViewContainerRef } from '@angular/core';
import { AboutComponent } from 'src/app/page/about/about.component';

@Directive({
  selector: '[appMessage]'
})
export class MessageDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'inherit';
  }

  constructor(
    private el: ElementRef,
    private ref: ViewContainerRef,
  ) {
    console.log(el.nativeElement);

    const c = this.ref.createComponent(AboutComponent);
  }



}
