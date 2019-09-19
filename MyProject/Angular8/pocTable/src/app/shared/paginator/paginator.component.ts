import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() rows: number;
  @Input() totalRecords: number;
  @Input() rowsPerPageOptions: Array<number>;
  @Output() onPagechange = new EventEmitter<any>();
  rowData:any;
  constructor() { }

  ngOnInit() {
    this.rowData = [];
  }
  paginate(event) {
    this.onPagechange.emit(event);
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
}
}
