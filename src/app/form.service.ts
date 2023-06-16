import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  

  constructor(private http:HttpClient) { }

  fetchdata(){
    return this.http.get('http://localhost:8080/getall')
  }

  add(detail:any){
    return this.http.post('http://localhost:8080/send',detail)
  }
}
