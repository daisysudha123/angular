import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  constructor(private http:HttpClient) { }
  // getFetching(date:any) {
    getFetching() {

    // console.log(date);
    
    // return this.http.get<any>(`https://jsonmock.hackerrank.com/api/stocks?date=`+date)
    return this.http.get<any>(`https://jsonmock.hackerrank.com/api/stocks`)

    
  }
  
  
}
