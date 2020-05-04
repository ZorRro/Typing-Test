import { Directive, ElementRef, Renderer2, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[typeAction]'
})
export class TypeActionDirective implements OnInit, AfterViewInit {
  private currentIndex = 0;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  ngAfterViewInit(): void {
    console.log(this.elementRef.nativeElement.innerHTML)
  }

  ngOnInit(): void {
    console.log(this.elementRef.nativeElement.contentEditable)
    this.elementRef.nativeElement.contentEditable = true;
  }

}
