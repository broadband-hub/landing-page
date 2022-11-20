import { Component } from '@angular/core';

@Component({
  selector: 'app-copyright',
  template: `<span>© 2019-{{ year }} BroadbandHub</span>`,
  host: {
    class: 'inline'
  }
})
export class CopyrightComponent {

  year: string;

  constructor() {
    this.year = new Date().getFullYear().toString();
  }

}
