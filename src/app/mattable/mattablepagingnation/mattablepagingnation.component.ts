import { Component, OnInit, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import {TempDataPaging} from 'src/app/temp-data-paging'
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-mattablepagingnation',
  templateUrl: './mattablepagingnation.component.html',
  styleUrls: ['./mattablepagingnation.component.scss']
})
export class MattablepagingnationComponent implements OnInit {

  dataSource;
  //this code use for client side table view odering
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //this code use for client side table pagingnation
  @ViewChild(MatPaginator) Paginator=MatPaginator
  constructor() { }
  ngOnInit(): void {
    const str1=of(TempDataPaging.dataSource);
    str1.subscribe(x=>{this.dataSource=x;
      console.log(x);
    })
    debugger;
    this.dataSource.Paginator=this.Paginator;
  }
}
