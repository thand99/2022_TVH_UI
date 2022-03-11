import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegAPIService {

  constructor(private _http:HttpClient) { }

    ////connection for frontend and backend

    apiUrl = 'http://localhost:9500/registration';

    ///get data


    getBody(credintials : any)
    {
      return this._http.post<any>(this.apiUrl, credintials
      );
    }
}

