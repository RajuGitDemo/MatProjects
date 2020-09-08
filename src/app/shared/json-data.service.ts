import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
  constructor(private http:HttpClient) { }
  getJSONData(){ 
    return this.http.get('https://api.github.com/users/hadley/orgs').subscribe(
      data=>{
        data;                     
      });   
   }   
}
