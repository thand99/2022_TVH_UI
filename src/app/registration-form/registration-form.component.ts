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

  




  constructor(private service:ApiserviceService, private route:Router) { }

  ngOnInit(): void {

      this.myform = new FormGroup({

        names: new FormControl('',[Validators.required, Validators.minLength(5)])
      })


  }

  get f(){
    return this.myform.controls;
  }


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




