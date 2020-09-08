import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ArticleService } from 'src/app/article.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-paging-in-mattable',
  templateUrl: './paging-in-mattable.component.html',
  styleUrls: ['./paging-in-mattable.component.scss']
})
export class PagingInMattableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private test:ArticleService) { }
  displayedColumns: string[] = ['id', 'title', 'category', 'writer'];
  
  dataSource = new MatTableDataSource(this.test.getAllArticles());

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
}

}
