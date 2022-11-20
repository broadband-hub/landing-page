import { ChangeDetectorRef, Component, EventEmitter, Input } from '@angular/core';
import { SwitchComponent } from '../switch/switch.component';

@Component({
  selector: '[app-switch-item]',
  templateUrl: './switch-item.component.html',
  styleUrls: ['./switch-item.component.scss'],
})
export class SwitchItemComponent {

  @Input() value?: any;

  onClick = new EventEmitter();

  private _index?: number;

  public active = false;


  constructor(private cdr: ChangeDetectorRef) { }

  get index() { 
    return this._index ?? 0;
  }

  set index(val: number) {
    this._index = val;
    this.cdr.detectChanges();
  }

  registerClick() {
    this.onClick.emit();
  }

  refresh() {
    this.cdr.detectChanges();
  }

}
