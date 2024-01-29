import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private _http: HttpClient) { }

  private urlView  = `${environment.apiUrlApiGateWay}/api/viewData`;

  generarPDFFuncionary(idfuncionary:number){
    return this._http.get(`${this.urlView}/api/report/funcionary/${idfuncionary}`,{responseType: 'arraybuffer'})
  }

  generarPDFAddress(idTeen:number){
    return this._http.get(`${this.urlView}/api/report/address/${idTeen}`,{responseType: 'arraybuffer'})
  }

  generarPDFAttendance(idactivity:number){
    return this._http.get(`${this.urlView}/api/report/attendance/${idactivity}`,{responseType: 'arraybuffer'})
  }
}
