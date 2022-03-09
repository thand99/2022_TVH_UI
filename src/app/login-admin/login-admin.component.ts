import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  names :string =''
  password:string =''
  email:string =''
  constructor(private service:ApiserviceService, private route:Router) { }

  ngOnInit(): void {



  
  }

  clickhandle(){

    this.service.getAllData({"emal":this.email, "passw": this.password,"fullnam": this.names }).subscribe((res)=>{
       
      console.log(res.message);

      if(res.message =="login Successful")
      {
        
          this.route.navigate(["admin"])
      }
      else{

        alert(res.message);
      }
    });
    
    
  }

}
