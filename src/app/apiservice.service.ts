import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }




  ////connection for frontend and backend

    apiUrl = 'http://localhost:9002/login'; //Adminlogin

    apeUrl = 'http://localhost:9002/registrations'; ///userFormRegistration

    apqUrl = 'http://localhost:9002/adminLoadFile'; //admin View Data From Database

    apaUrl = 'http://localhost:9002/signUp'; /// Signup for users

    apkUrl = 'http://localhost:9002/userLogin'; /// Signup for users



    

    ///get data post admin data to the database from login
    getAllData(credintials : any)
    {
      return this._http.post<any>(this.apiUrl, credintials);

      
    }

    //get data from form store it to the database

    getRegistration(credintials:any)
    {
      return this._http.post<any>(this.apeUrl, credintials );
    }

    ///retrieve data from database to admin dashboard
    getadminLoadFile():Observable<any>
    {
      return this._http.get(`${this.apqUrl}`);
    }

     //post using signup
    getSignup(credintials:any)
    {
      return this._http.post<any>(this.apaUrl, credintials );
    }

    //userLogin function

    getLogin(credintials : any)
    {
      return this._http.post<any>(this.apkUrl, credintials);

      
    }
}
