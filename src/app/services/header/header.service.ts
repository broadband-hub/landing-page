import { ElementRef, Injectable, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private header?: ElementRef<HTMLDivElement>;

  constructor() { }

  height() {
    return this.header?.nativeElement.offsetHeight ?? 0;
  }

  setHeader(element_ref: ElementRef<HTMLDivElement>) {
    this.header = element_ref;
  }


}
