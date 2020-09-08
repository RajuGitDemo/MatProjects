import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
// import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ArticleService } from 'src/app/article.service';
@Component({
  selector: 'app-mattable-sort',
  templateUrl: './mattable-sort.component.html',
  styleUrls: ['./mattable-sort.component.scss']
})
export class MattableSortComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatPaginator) paginator: MatPaginator;  
  constructor(private test:ArticleService) { }
  displayedColumns: string[] = ['id', 'title', 'category', 'writer'];
  
  dataSource = new MatTableDataSource(this.test.getAllArticles());


  ngOnInit() {
    
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
}

}
