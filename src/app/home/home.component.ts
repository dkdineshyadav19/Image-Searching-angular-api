import { Component, Input, OnInit } from '@angular/core';
import {  HomeService} from "./home.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  map = new Map<string, string>();
  mydata:any;
  search:string="dog";
  pageNo=1;
  
  ngOnInit(): void {
 }
 constructor(public user:HomeService) {
 
  this.callingHome(this.search,this.pageNo);
  console.log(this.pageNo)
}
callingHome(search:string,pageNo:number)
{
  this.user.getHome(search,pageNo).subscribe(data=>{
    console.warn(data)
    this.mydata=data;
    this.mypass();
    
  })
}
mypass()
{
  this.map.clear();
  for(let i=0;i<10;i++)
    {
      this.map.set(this.mydata.results[i].urls.regular,this.mydata.results[i].urls.full);
    }
   // console.log(this.map);
  }

  pagination()
  {
    document.body.scrollTop=0;
    document.documentElement.scrollTop = 0;
    this.pageNo=this.pageNo+1;
    this.callingHome(this.search,this.pageNo);
    console.log(this.pageNo)
  }
  paginationBackward(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop = 0;
    this.pageNo=this.pageNo-1;
    if(this.pageNo==0)
    {
      this.pageNo=1;
    }
    this.callingHome(this.search,this.pageNo);
    console.log(this.pageNo)

  }
  wallpaper()
  {
    this.search="wallpaper";
    this.pageNo=1;
    this.callingHome(this.search,this.pageNo);
  }
  animals()
  {
    this.search="animals";
    this.pageNo=1;
    this.callingHome(this.search,this.pageNo);;
  }
  forest()
  {
    this.search="forest";
    this.pageNo=1;
    this.callingHome(this.search,this.pageNo);
  }
  sea()
  {
    this.search="sea";
    this.pageNo=1;
    this.callingHome(this.search,this.pageNo);
  }
  cartoon()
  {
    this.search="cartoon";
    this.pageNo=1;
    this.callingHome(this.search,this.pageNo);
  }
}
