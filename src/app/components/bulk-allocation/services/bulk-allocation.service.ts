import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BulkAllocationService {

  constructor(private _http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': `Bearer ${environment.token}`
    })};

  private urlBulkAllocation = `${environment.apiUrlApiGateWay}`;


  findAll() {
    return this._http.get<any>(`${this.urlBulkAllocation}/api/transaccionalFuncionary/listData`, this.httpOptions);
  }

  findAlltutor() {
    return this._http.get<any>(`${this.urlBulkAllocation}/api/funcionaryData/listData/active`, this.httpOptions);
  }

  findbyIdTutor(idTutor: any){
    return this._http.get<any>(`${this.urlBulkAllocation}/api/transaccionalFuncionary/listIdTutor/${idTutor}`, this.httpOptions);
  }

  UpdateAdolescent(teen: any){
    return this._http.post(`${this.urlBulkAllocation}/api/teenData/bulk`, teen)
  }
}
