import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Guest } from '../models/Guest';
import { Observable } from 'rxjs';
import { apiUrls } from '../models/constants/environment';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  constructor(private httpClient: HttpClient) {}

  public upsertGuest(guest: Guest): Observable<Guest[]> {
    return this.httpClient.post<Guest[]>(
      environment.baseApiUrl + apiUrls.UpsertGuest,
      guest,
      {
        headers: { 'X-API-Key': environment.apiKey },
      }
    );
  }
}
