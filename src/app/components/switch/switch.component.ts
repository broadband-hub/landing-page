import { AfterViewInit, ChangeDetectorRef, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { SwitchItemComponent } from '../switch-item/switch-item.component';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements AfterViewInit {

  @Input() value?: any;
  @Output() valueChange = new EventEmitter();

  activeIndex = 0;

  @ContentChildren(SwitchItemComponent) items!: QueryList<SwitchItemComponent>;

  constructor(private cdr: ChangeDetectorRef) { }

  private setActiveItem() {
    this.items.forEach(item => {
      if(item.index === this.activeIndex) {
        item.active = true;
      }
      else {
        item.active = false;
      }
    })
  }

  ngAfterViewInit(): void {

    let index = 0;
    let initial_set = false;

    this.items.forEach(item => {
      item.index = index;

      if((typeof this.value === 'undefined' || item.value === this.value) && !initial_set) {
        this.activeIndex = item.index;
        initial_set = true;
        item.active = true;
        item.refresh();
      }
      else {
        item.active = false;
        item.refresh();
      }

      item.onClick.subscribe(() => {
        this.activeIndex = item.index!;
        this.value = item.value;
        this.valueChange.emit(this.value);
        this.setActiveItem();
      });

      item.refresh();

      index++;

    })

    
  }

}
