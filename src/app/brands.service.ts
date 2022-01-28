import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<any>('http://localhost:3000/products')
  }

  getAllProducts(value:any){
    return this.http.post<any>('http://localhost:3000/products',value)
  }

  putProducts(id:any,value:any){
    return this.http.put<any>('http://localhost:3000/products/'+id,value)
  }

  deleteProducts(id:any){
    return this.http.delete<any>('http://localhost:3000/products/'+id)
  }
}
