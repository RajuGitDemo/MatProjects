import { Component, OnInit, ViewChild } from '@angular/core';
import {Tempdata } from '../Tempdata';
import { of } from 'rxjs/internal/observable/of';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-mattable',
  templateUrl: './mattable.component.html',
  styleUrls: ['./mattable.component.scss']
})
export class MattableComponent implements OnInit {
  dataSource;
  //this code use for client side table view odering
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  @ViewChild(MatSort, {static: true}) matsort=MatSort;
  constructor(private tempdata:Tempdata) { }
  ngOnInit(): void {
    const str1=of(Tempdata.dataSource);   
    str1.subscribe(x=>{this.dataSource=x;
      this.dataSource.matsort=this.matsort;
      console.log(x);      
    })    
  }
  //For Get Row Value
  logData(row){
   alert(JSON.stringify(row));
  }

}
