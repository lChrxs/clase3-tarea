import { Directive, ElementRef, HostListener, Input, Renderer2, OnInit, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[transition]'
})
export class TransitionDirective implements AfterViewInit {

  @Input('transition') colorText: string = '';
  @Input('textSize') textSize: string = '';
  @Input('backgroundColor') backgroundColor: string = '';

  @HostListener('mouseenter') hover(){
    console.log('Hover event')
    this.render.setStyle(this.element.nativeElement, 'color', this.colorText);
    this.render.setStyle(this.element.nativeElement, 'fontSize', this.textSize);
    this.render.setStyle(this.element.nativeElement, 'backgroundColor', this.backgroundColor);
  }
  
  @HostListener('mouseleave') out(){
    console.log('mouse leave event')
    this.render.setStyle(this.element.nativeElement, 'color', this.originalTextColor);
    this.render.setStyle(this.element.nativeElement, 'fontSize', this.originalTextSize);
    this.render.setStyle(this.element.nativeElement, 'backgroundColor', this.originalBackgroundColor);
  }

  originalTextColor = '';
  originalBackgroundColor = '';
  originalTextSize = '';


  constructor(public element: ElementRef, public render: Renderer2) { }

  ngAfterViewInit(): void {
    this.originalTextColor = this.element.nativeElement.style.color;
    this.originalBackgroundColor = this.element.nativeElement.style.backgroundColor;
    this.originalTextSize = this.element.nativeElement.style.fontSize;
    console.log(this.originalTextColor);
    console.log(this.originalBackgroundColor); 
  }


}
