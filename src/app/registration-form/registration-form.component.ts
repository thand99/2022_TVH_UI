import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { Router } from '@angular/router';
import {ReactiveFormsModule, FormsModule, Validators, FormGroup, FormControl} from '@angular/forms';
import {  EventEmitter, Input, Output } from '@angular/core';






@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
  
})





export class RegistrationFormComponent implements OnInit {
  


  constructor(private service:ApiserviceService, private route:Router) { }


 


  ngOnInit(): void {


    this.registerForm = new FormGroup({

      "names": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-z]*')]),///
      "email": new FormControl(null, [Validators.required, Validators.email]),///
      "password": new FormControl(null,Validators.required ), ///
      "mobileNumber": new FormControl(null,[Validators.required, Validators.pattern('[0-9]*')] ),
      "institutes": new FormControl(null,Validators.required ),
      "skill": new FormControl(null,Validators.required ),
      "statuss": new FormControl(null,Validators.required )

    })
  }


  
  myform!:FormGroup;


  public names :string =''
  public gender:string =''
  public dateBirth:string =''
  public stud_email:string =''
  public password:string =''
  public institute:string =''
  public academicRecord:string =''
  public  mNumber:string =''
  public skills:string =''
  public status:string =''

  registerForm:any; ////

  //////////




  ///submit Function

  submitData()
  {
    console.log(this.registerForm.value);

    if(this.registerForm.valid)
    {
       alert('Thank you, your application submitted');
       this.registerForm.reset();

       this.route.navigate(["home"])
    }

  }

  get namess(){return this.registerForm.get('names');}
  get emails(){return this.registerForm.get('email');}
  get passwords(){return this.registerForm.get('password');}
  get mobilenumber(){return this.registerForm.get('mobileNumber');}
  get inst(){return this.registerForm.get('institutes');}
  get skil(){return this.registerForm.get('skill');}
  get statess(){return this.registerForm.get('statuss');}
  


  clickhandle(){

    console.log(this.names);

    this.service.getRegistration({"names":this.names, "gender": this.gender,"dateBirth": this.dateBirth,"stud_email": this.stud_email ,"password": this.password,"institute": this.institute,"academicRecord": this.academicRecord,"mobileNumber": this.mNumber,"skill": this.skills,"status": this.status }).subscribe((res)=>{
       
      console.log(res.message);



      if(res.message =="Application Successfully submited")
      {
          alert(res.message);
          this.route.navigate(["home"])
          
      }
      else{

        alert(res.message);
      }
    });
    
    
  }



  }











