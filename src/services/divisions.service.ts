import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DivisionsService {

  private serverUrl = environment.apiUrl;
  private endpoint = "Divisions" ;
  private serverreqHeader = environment.reqHeader;

  constructor(public http: HttpClient) { }
  
  public getDivisions(): Observable<object[]>{
   
    return this.http.get<object[]>(`${this.serverUrl}/${this.endpoint}`,{headers : this.serverreqHeader})
    .pipe(map((res : any) => {
      console.log("API response", res);
      return res;
    }))
}
}