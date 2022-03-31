import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }




  ////connection for frontend and backend

    apiUrl = 'http://localhost:9002/login';

    apeUrl = 'http://localhost:9002/registrations';

    apqUrl = 'http://localhost:9002/adminLoadFile';

    

    ///get data


    getAllData(credintials : any)
    {
      return this._http.post<any>(this.apiUrl, credintials);

      
     
    }

    getRegistration(credintials:any)
    {
      return this._http.post<any>(this.apeUrl, credintials );
    }

    getadminLoadFile():Observable<any>
    {
      return this._http.get(`${this.apqUrl}`);
    }
}
