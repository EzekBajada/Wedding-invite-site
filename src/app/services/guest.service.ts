import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Guest} from "../models/Guest";
import {Observable} from "rxjs";
import {apiUrls, baseApiUrl} from "../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private httpClient: HttpClient) { }

  public getAllGuests(): Observable<Guest[]>{
    return this.httpClient.get<Guest[]>(baseApiUrl + apiUrls.GetAllGuests);
  }

  public findGuest(name: string): Observable<Guest[]>{
    let params = new HttpParams().set('name', name);

    return this.httpClient.get<Guest[]>(baseApiUrl + apiUrls.FindGuest, {params: params});
  }
}
