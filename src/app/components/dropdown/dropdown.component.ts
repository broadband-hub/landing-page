import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  private _visible = false;

  get visible() { return this._visible }

  constructor() { }

  ngOnInit(): void {
  }

  public show() {
    this._visible = true;
  }

  public hide() {
    this._visible = false;
  }

  public toggle() {
    this._visible = !this._visible;
  }

}
