import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

 
  getHome(search:string,pageNo:number){
    let url="https://api.unsplash.com/search/photos?page="+pageNo+"&query="+search+"&client_id=5tEv_2y6g_9OzB8g0HW5SxC5EBbFLdC8rSx6zadgxUM"
    return this.http.get(url); 
  }
}
