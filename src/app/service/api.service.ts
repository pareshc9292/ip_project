import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public productList : any;
  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products/")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  findProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products/1")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
