import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment.development";
import {HttpHeaders, HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ViewAttendanceService {


  private url = `${environment.apiUrlApiGateWay}`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': `Bearer ${environment.token}`
    })};


  constructor(private HttpClient: HttpClient) { }

  findbyIdActivity(idActivity: any){
    return this.HttpClient.get<any>(`${this.url}/v1/attendance/view/${idActivity}`, this.httpOptions);
  }

}
