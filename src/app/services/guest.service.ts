import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Guest} from "../models/Guest";
import {Observable} from "rxjs";
import {apiUrls, weddingInfo} from "../environment/models";

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private httpClient: HttpClient) { }

  public getAllGuests(): Observable<Guest[]>{
    return this.httpClient.get<Guest[]>(apiUrls.GetAllGuestsLocal);
  }
}
