import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { userDto } from '../model/userDto';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {

  private url = environment.apiURL;

  constructor(private http: HttpClient) { }


  register(user:userDto){
    return this.http.post(`${this.url}/keycloak/user/create`, user);
  }
}
