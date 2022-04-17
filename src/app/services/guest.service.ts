import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Guest } from '../models/Guest';
import { Observable } from 'rxjs';
import { apiUrls } from '../models/constants/environment';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  constructor(private httpClient: HttpClient) {}

  public getAllGuests(): Observable<Guest[]> {
    return this.httpClient.get<Guest[]>(environment.baseApiUrl + apiUrls.GetAllGuests, {
      headers: {'X-API-Key': environment.apiKey}
    });
  }

  public findGuest(name: string): Observable<Guest[]> {
    let params = new HttpParams().set('name', name);

    return this.httpClient.get<Guest[]>(environment.baseApiUrl + apiUrls.FindGuest, {
      params: params,
      headers: {'X-API-Key': environment.apiKey}
    });
  }
}
