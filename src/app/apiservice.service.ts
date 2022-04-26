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

    apwUrl = 'http://localhost:9002/noticeLoadFile'; //Notice display Data From Database

    apaUrl = 'http://localhost:9002/signUp'; /// Signup for users

    apkUrl = 'http://localhost:9002/userLogin'; /// Users login

    apmUrl = 'http://localhost:9002/notice'; /// announcement



    

    ///get data post admin data to the database from login
    getAllData(credintials : any)
    {
      return this._http.post<any>(this.apiUrl, credintials);

      
    }

    //get data from frontend store it to the database

    getRegistration(credintials:any)
    {
      return this._http.post<any>(this.apeUrl, credintials );
    }

    ///retrieve data from database to admin dashboard
    getadminLoadFile():Observable<any>
    {
      return this._http.get(`${this.apqUrl}`);
    }

        ///retrieve data from database to admin dashboard
    getnoticeLoadFile():Observable<any>
    {
          return this._http.get(`${this.apwUrl}`);
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

    //Get announcement data from admin store it to the database

    getAnnouncement(credintials:any)
    {
        return this._http.post<any>(this.apmUrl, credintials );
    }
}
