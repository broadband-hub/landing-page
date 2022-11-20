import { AfterContentChecked, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'expandable',
    '(click)': 'toggle()',
    '[style.maxHeight]': 'getHeight()'
  }
})
export class ExpandableComponent implements AfterContentChecked {

  @Input() title: string = '';
  @Input() expanded: boolean = false;
  @Output() expandedChange = new EventEmitter<boolean>();

  @ViewChild('expandable_header') header!: ElementRef<HTMLDivElement>;
  @ViewChild('expandable_content') content!: ElementRef<HTMLDivElement>;

  @HostListener('window:resize')
  handleWindowResize() {
    this.cdr.detectChanges();
  }

  constructor(private cdr: ChangeDetectorRef) { }

  toggle() {
    this.expanded = !this.expanded;
    this.expandedChange.emit(this.expanded);
  }

  getHeight() {
    if(this.header?.nativeElement && this.content?.nativeElement) {
      return (this.expanded ? (this.header.nativeElement.offsetHeight + this.content.nativeElement.offsetHeight) : (this.header.nativeElement.offsetHeight)) + 'px';
    }
    else {
      return 'none';
    }
  }

  ngAfterContentChecked(): void {
      this.cdr.detectChanges();
  }

}
