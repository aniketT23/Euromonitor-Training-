import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSampleDir]',
})
export class SampleDirDirective {
 
  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.color="green";  //ElementRef is used to give access to the DOM element through its nativeElement Property
  }
  private highlight(color: string, size:string , backgroundColor:string,width:string,font:string) {
    this.el.nativeElement.style.backgroundColor = backgroundColor;
    this.el.nativeElement.style.transition = size;
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.width = width;
    this.el.nativeElement.style.height = width;
    this.el.nativeElement.style.fontSize = font;



  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('white','width 2s,height 2s','blue','400px','25px')
  }
   @HostListener('mouseleave') onMouseLeave(){
    this.highlight('black','width 2s, height 2s','red','200px','20px')
  }
}
