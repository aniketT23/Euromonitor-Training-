import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSecondDir]'
})
export class SecondDirDirective {
  @Input() defaultSize = '';
  @Input() appSecondDir = '';
  constructor(private el :ElementRef) { }
  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appSecondDir || this.defaultSize || 'red');
   
  }
   @HostListener('mouseleave') onMouseLeave(){
    this.highlight('black')
  }
}
