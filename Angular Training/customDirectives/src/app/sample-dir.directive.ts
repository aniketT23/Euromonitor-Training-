import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSampleDir]'
})
export class SampleDirDirective {

  constructor(private el:ElementRef) {
    // this.el.nativeElement.style.color="green";  //ElementRef is used to give access to the DOM element through its nativeElement Property
   }
   private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  //  @HostListener('mouseenter') onMouseEnter(){
  //    this.highlight('blue')
  //  }
  //  @HostListener('mouseleave') onMouseLeave(){
  //   this.highlight('green')
  // }
  @Input() appSampleDir = '';
}
