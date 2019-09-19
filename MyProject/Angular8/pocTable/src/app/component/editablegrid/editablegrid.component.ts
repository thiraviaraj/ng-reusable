import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editablegrid',
  templateUrl: './editablegrid.component.html',
  styleUrls: ['./editablegrid.component.scss']
})
export class EditablegridComponent implements OnInit {

  constructor() { }
  brands: any[];
  cars: any[];
  loadData(event) {
    //initialize
     this.cars.push(
      { brand: 'Thiravi', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' }
  );
      // this.carService.getCarsSmall().then(cars => this.cars = cars);
}
  ngOnInit() {
    this.cars = [
      {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
      {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
      {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
      {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
      {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
      {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
      {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
      {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
      {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
      {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
  ];
    this.brands = [
      {label: 'Audi', value: 'Audi'},
      {label: 'BMW', value: 'BMW'},
      {label: 'Fiat', value: 'Fiat'},
      {label: 'Ford', value: 'Ford'},
      {label: 'Honda', value: 'Honda'},
      {label: 'Jaguar', value: 'Jaguar'},
      {label: 'Mercedes', value: 'Mercedes'},
      {label: 'Renault', value: 'Renault'},
      {label: 'VW', value: 'VW'},
      {label: 'Volvo', value: 'Volvo'}
  ];
  
  }
  onRowEditInit() {
}

onRowEditSave() {
}

onRowEditCancel() {

}
onBlur() {
  this.cars.push(this.cars[this.cars.length-1])
}

}
