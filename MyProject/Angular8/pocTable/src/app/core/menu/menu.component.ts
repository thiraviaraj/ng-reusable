import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItem: Menu[];
  constructor() { }

  ngOnInit() {
    this.menuItem = [
      {
        id: 1,
        displayName: 'Standard Grid',
        url: '/sGrid'
      },
      {
        id: 2,
        displayName: 'Infinty Scroll',
        url: '/iScroll'
      },
      {
        id: 3,
        displayName: 'Tab Behavior',
        url: '/tab'
      },
      {
        id: 4,
        displayName: 'Pagination',
        url: '/paginator'
      },
      {
        id: 4,
        displayName: 'Editable Grid',
        url: '/eGrid'
      }
    ];
  }

}
