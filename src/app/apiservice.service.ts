import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

    postLeader(data:any){
      return this.http.post<any>('http://localhost:3000/posts', data).pipe(map((res:any)=> {
        return res;
      }))
    }

    getLeader(){
      return this.http.get<any>('http://localhost:3000/posts').pipe(map((res:any)=> {
        return res;
      }))
    }

    updateLeader(data:any, id:number){
      return this.http.put<any>('http://localhost:3000/posts' +id, data).pipe(map((res:any)=> {
        return res;
      }))
    }

    deleteLeader(id:number){
      return this.http.delete<any>('http://localhost:3000/posts' +id).pipe(map((res:any)=> {
        return res;
      }))
    }






/*
  ////connection for frontend and backend

    apiUrl = 'http://localhost:9002/login'; //Adminlogin

    apeUrl = 'http://localhost:9002/registrations'; ///userFormRegistration

    apqUrl = 'http://localhost:9002/adminLoadFile'; //admin View Data From Database

    apaUrl = 'http://localhost:9002/signUp'; /// Signup for users

    apkUrl = 'http://localhost:9002/userLogin'; /// Users login



    

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
    */
}
