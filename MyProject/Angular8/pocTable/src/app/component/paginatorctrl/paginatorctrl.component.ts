import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DomHandler } from 'primeng/components/dom/domhandler';
@Component({
  selector: 'app-paginatorctrl',
  templateUrl: './paginatorctrl.component.html',
  styleUrls: ['./paginatorctrl.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0.5,
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class PaginatorCtrlComponent implements OnInit {
  cars: any;
  carsFull: any;
  constructor() { }
  @ViewChild('dt', {static: true}) dt: any;
  editTemplate(e: any) {
    console.log(e);
}
  ngOnInit() {
    this.carsFull = [
      {"brand": "VW1", "year": 2012, "color": "Orange"},
      {"brand": "Audi2", "year": 2011, "color": "Black"},
      {"brand": "Renault3", "year": 2005, "color": "Gray"},
      {"brand": "BMW4", "year": 2003, "color": "Blue"},
      {"brand": "Mercedes5", "year": 1995, "color": "Orange"},
      {"brand": "Volvo6", "year": 2005, "color": "Black"},
      {"brand": "Honda7", "year": 2012, "color": "Yellow"},
      {"brand": "Jaguar8", "year": 2013, "color": "Orange"},
      {"brand": "Ford9", "year": 2000, "color": "Black"},
      {"brand": "Fiat10", "year": 2013, "color": "Red"},
      {"brand": "VW11", "year": 2012, "color": "Orange"},
      {"brand": "Audi12", "year": 2011, "color": "Black"},
      {"brand": "Renault13", "year": 2005, "color": "Gray"},
      {"brand": "BMW14", "year": 2003, "color": "Blue"},
      {"brand": "Mercedes15", "year": 1995, "color": "Orange"},
      {"brand": "Volvo16", "year": 2005, "color": "Black"},
      {"brand": "Honda17", "year": 2012, "color": "Yellow"},
      {"brand": "Jaguar18", "year": 2013, "color": "Orange"},
      {"brand": "Ford19", "year": 2000, "color": "Black"},
      {"brand": "Fiat20", "year": 2013, "color": "Red"},
      {"brand": "VW21", "year": 2012, "color": "Orange"},
      {"brand": "Audi22", "year": 2011, "color": "Black"},
      {"brand": "Renault23", "year": 2005, "color": "Gray"},
      {"brand": "BMW24", "year": 2003, "color": "Blue"},
      {"brand": "Mercedes25", "year": 1995, "color": "Orange"},
      {"brand": "Volvo26", "year": 2005, "color": "Black"},
      {"brand": "Honda", "year": 2012, "color": "Yellow"},
      {"brand": "Jaguar", "year": 2013, "color": "Orange"},
      {"brand": "Ford", "year": 2000, "color": "Black"},
      {"brand": "Fiat", "year": 2013, "color": "Red"},
      {"brand": "VW", "year": 2012, "color": "Orange"},
      {"brand": "Audi", "year": 2011, "color": "Black"},
      {"brand": "Renault", "year": 2005, "color": "Gray"},
      {"brand": "BMW", "year": 2003, "color": "Blue"},
      {"brand": "Mercedes", "year": 1995, "color": "Orange"},
      {"brand": "Volvo", "year": 2005, "color": "Black"},
      {"brand": "Honda", "year": 2012, "color": "Yellow"},
      {"brand": "Jaguar", "year": 2013, "color": "Orange"},
      {"brand": "Ford", "year": 2000, "color": "Black"},
      {"brand": "Fiat", "year": 2013, "color": "Red"}
  ];
  this.cars = this.carsFull.slice(0,10);
  }
  sumProp(items, prop) {
    return items.reduce( function(a, b){
        return parseInt(a) + parseInt(b[prop]);
    }, 0);
  }
  track1(ev: any) {
  }
  onPageChange(ev) {
    this.cars = this.carsFull.slice(ev.first,(parseInt(ev.rows)+ev.first));
  }
}
