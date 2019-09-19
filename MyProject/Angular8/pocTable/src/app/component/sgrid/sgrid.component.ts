import { Component, OnInit, ElementRef } from '@angular/core';
import {LazyLoadEvent} from 'primeng/api';

@Component({
  selector: 'app-sgrid',
  templateUrl: './sgrid.component.html',
  styleUrls: ['./sgrid.component.scss']
})
export class SgridComponent implements OnInit {
  virtualCars: any;
  inmemoryData: any[];
  totalRecords: number;
  sales: any;
  percent: any;
  isOpen: any;
  cols: any;
  citems: any;
  constructor(private elementRef:ElementRef) {}
  track(value: number): void {
    this.percent = value;
    this.isOpen = !(value<25);
  }
  
  ngOnInit() {
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
  this.cols = [
    { field: 'vin', header: 'Vin' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' }
  ];
  this.citems = [
    { label: 'View', icon: 'pi pi-search', command: (event) => this.viewCar() },
    { label: 'Delete', icon: 'pi pi-times', command: (event) => this.deleteCar() }
  ];
  }
  viewCar() {

  }
  deleteCar() {
    
  }
  loadDataOnScroll(event: LazyLoadEvent) {    
    //for demo purposes keep loading the same dataset 
    //in a real production application, this data should come from server by building the query with LazyLoadEvent options 
    setTimeout(() => {
        //last chunk
        if (event.first === 249980)
            this.virtualCars = this.loadChunk(event.first, 20);
        else
            this.virtualCars = this.loadChunk(event.first, event.rows);
    }, 250);   
  }
  
  loadChunk(index, length): any[] {
    let chunk: any[] = [];
    for (let i = 0; i < length; i++) {
        chunk[i] = {...this.inmemoryData[i], ...{vin: (index + i)}};
    } 
  
    return chunk;
  }

  loadData(event) {
    //initialize
     this.sales.push(
      { brand: 'Thiravi', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' }
  );
      // this.carService.getCarsSmall().then(cars => this.cars = cars);
}

}
