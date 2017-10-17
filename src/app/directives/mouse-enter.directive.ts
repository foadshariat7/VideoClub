import { element } from 'protractor';
import { Directive, ElementRef,  Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseEnter]'
})
export class MouseEnterDirective {
  
  constructor(private elementref:ElementRef,private renderer:Renderer2) { }
  
  
  @HostListener('mouseenter') me(eventdata:Event){
    this.renderer.setStyle(this.elementref.nativeElement,'font-weight','bold');
  }

  @HostListener('mouseleave') ml(eventdata:Event){
    this.renderer.setStyle(this.elementref.nativeElement,'font-weight','normal');
    
    
  }
}
