import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { Router } from '@angular/router';
import {ReactiveFormsModule, FormsModule, Validators, FormGroup, FormControl} from '@angular/forms';
import {  EventEmitter, Input, Output } from '@angular/core';


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

    
    this.loginForm = new FormGroup({

      "email": new FormControl(null, [Validators.required, Validators.email]),///
      "password": new FormControl(null,[Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-z]*')]), ///

       //"pdf": new FormControl(null, [Validators.required, requiredFileType('pdf')])

    })



  
  }

  get emails(){return this.loginForm.get('email');}
  get passwords(){return this.loginForm.get('password');}



  loginForm:any;

  public emal:string =''
  public passw:string =''




  clickhandle(){

    this.service.getAllData({"emal":this.emal, "passw": this.password }).subscribe((res)=>{
       
      console.log(res.message);

      if(res.message =="login Successful")
      {
        
          this.route.navigate(["adminboard"])
      }
      else{

        alert(res.message);
      }
    });
    
    
  }

}
