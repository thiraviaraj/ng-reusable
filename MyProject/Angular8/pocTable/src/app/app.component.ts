import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import {MenuItem, LazyLoadEvent} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'to The World of Reusables';
  sales: any[];
  thir: any[];
  items: any[];
  items1: MenuItem[];
  items2: MenuItem[];
  citems: any[];
  activeItem: any;
  cols: any;
  percent: number = 0;
  virtualCars: any;
  inmemoryData: any[];
  totalRecords: number;
  isOpen = false;
  loading: boolean;
  constructor(private elementRef:ElementRef) {}
  track(value: number): void {
    this.percent = value;
    this.isOpen = !(value<25);
  }
  loadData(event) {
    //initialize
     this.sales.push(
      { brand: 'Thiravi', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' }
  );
      // this.carService.getCarsSmall().then(cars => this.cars = cars);
}


onClick(event) {
  // console.log(event.srcElement.scrollTop);
}
  ngOnInit() {
    this.items1 = [
      {label: 'Stats', icon: 'fa fa-fw fa-bar-chart'},
      {label: 'Calendar', icon: 'fa fa-fw fa-calendar'},
      {label: 'Documentation', icon: 'fa fa-fw fa-book'},
      {label: 'Support', icon: 'fa fa-fw fa-support'},
      {label: 'Social', icon: 'fa fa-fw fa-twitter'}
  ];
  this.totalRecords = 250000;
  this.loading = true;

  this.inmemoryData = [
      {"brand": "VW", "year": 2012, "color": "Orange"},
      {"brand": "Audi", "year": 2011, "color": "Black"},
      {"brand": "Renault", "year": 2005, "color": "Gray"},
      {"brand": "BMW", "year": 2003, "color": "Blue"},
      {"brand": "Mercedes", "year": 1995, "color": "Orange"},
      {"brand": "Volvo", "year": 2005, "color": "Black"},
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
  this.items2 = [
      {label: 'Stats', icon: 'fa fa-fw fa-bar-chart'},
      {label: 'Calendar', icon: 'fa fa-fw fa-calendar'},
      {label: 'Documentation', icon: 'fa fa-fw fa-book'},
      {label: 'Support', icon: 'fa fa-fw fa-support'},
      {label: 'Social', icon: 'fa fa-fw fa-twitter'}
  ];

  this.activeItem = this.items2[0];
  this.sales = [
    { brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
    { brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
    { brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
    { brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' },
    { brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
    { brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
    { brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
    { brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
    { brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
    { brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' }
];
  this.items = [
    {label: 'Stats', icon: 'fa fa-fw fa-bar-chart'},
    {label: 'Calendar', icon: 'fa fa-fw fa-calendar'},
    {label: 'Documentation', icon: 'fa fa-fw fa-book'},
    {label: 'Support', icon: 'fa fa-fw fa-support'},
    {label: 'Social', icon: 'fa fa-fw fa-twitter'}
];

  }
  viewCar() {
    // this.messageService.add({ severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand });
}
deleteCar() {

}



}
