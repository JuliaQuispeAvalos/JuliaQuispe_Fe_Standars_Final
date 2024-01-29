import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private urlAttendance = `${environment.apiUrlApiGateWay}/api/attendanceData`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': `Bearer ${environment.token}`
    })};


  constructor(private _http: HttpClient) { }

  findbyIdActivity(idActivity: any){
    return this._http.get<any>(`${this.urlAttendance}/api/transaccionalData/Actividad/${idActivity}`, this.httpOptions);
  }

  create(attendance: any){
    return this._http.post(`${this.urlAttendance}/v1/attendance`, attendance, this.httpOptions)
  }

  listActivities(id:any){
    return this._http.get(`${this.urlAttendance}/api/asignation/programs/idPrograms/${id}`, this.httpOptions)
  }


  listPrograms(){
    return this._http.get(`http://localhost:9898/v1/programs/list`)
  }


}
