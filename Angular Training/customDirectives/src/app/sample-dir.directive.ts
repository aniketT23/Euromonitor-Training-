import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSampleDir]',
})
export class SampleDirDirective {
 
  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.color="green";  //ElementRef is used to give access to the DOM element through its nativeElement Property
  }
  private highlight(color: string, size:string , backgroundColor:string) {
    this.el.nativeElement.style.backgroundColor = backgroundColor;
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.fontSize = size;

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('white','28px','blue')
  }
   @HostListener('mouseleave') onMouseLeave(){
    this.highlight('black','48px','red')
  }
}
