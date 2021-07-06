import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private user:HomeComponent) { }

  ngOnInit(): void {
  }
  query:string=this.user.search;
  pageNumber=this.user.pageNo;
  searchByQuery(query:string)
  {
    this.query=query;
    this.user.search=this.query;

    //console.log(this.user.search)
    this.user.pageNo=1;
    this.user.callingHome(this.user.search,this.user.pageNo);
  }

}
