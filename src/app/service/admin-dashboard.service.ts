import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  private SERVER_URL;
  constructor(private http: HttpClient) {
    this.SERVER_URL = environment.serverUrl;
   }
   public getHttpTraces(): Observable<any>{
     return this.http.get(`${this.SERVER_URL}/httptrace`); 
   }
}
