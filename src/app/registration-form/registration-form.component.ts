import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { Router } from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {  EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})



export class RegistrationFormComponent implements OnInit {



  public test : string = "toto";
  public names :string =''
  genderer:string =''
  dateBirthe:string =''
  stud_emaile:string =''
  institutee:string =''
  proofe:string =''
  mNumbere:string =''
  skillse:string =''
  statuse:string =''




  constructor(private service:ApiserviceService, private route:Router) { }

  ngOnInit(): void {


  }



  clickhandle(){

    this.service.getRegistration({"names":this.names, "gender": this.genderer,"dateBirth": this.dateBirthe,"stud_email": this.stud_emaile,"institute": this.institutee,"proof": this.proofe,"mNumber": this.mNumbere,"skills": this.skillse,"status": this.statuse }).subscribe((res)=>{
       
      console.log(res.message);

      if(res.message =="Application Successfully submited")
      {
        
          this.route.navigate(["home"])
      }
      else{

        alert(res.message);
      }
    });
    
    
  }

}
