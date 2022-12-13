import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderService } from 'src/app/services/header/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('header') private header_ref!: ElementRef<HTMLDivElement>;

  constructor(private header: HeaderService) { }

  ngAfterViewInit(): void {
    this.header.setHeader(this.header_ref);
  }

}
