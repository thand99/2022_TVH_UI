import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { Router } from '@angular/router';
import {ReactiveFormsModule, FormsModule, Validators, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {  EventEmitter, Input, Output } from '@angular/core';


///for drop down
interface userss {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  submitted: boolean = false;

  constructor(private service:ApiserviceService, private route:Router, private formBuilder: FormBuilder) { }


  users: userss[] = [
    {value: 'Mentor', viewValue: 'Mentor'},
    {value: 'Guest', viewValue: 'Guest'},
    {value: 'Student', viewValue: 'Student'},
    {value: 'Sponsor', viewValue: 'Sponsor'}
  ];

  ngOnInit(): void {


    this.signupForm = new FormGroup({

      "names": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-z]*')]),///
      "surname": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-z]*')]),
      "email": new FormControl(null, [Validators.required, Validators.email]),///
      "password": new FormControl(null,[Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-z]*')]),
      "confPass": new FormControl(null,Validators.required ),
      "Usere": new FormControl(null,Validators.required )
    })
  }


 signupForm:any;
 public hold :string =''



 public name :string =''
 public surnam:string =''
 public emal:string =''
 public passwrd:string =''
 public confPas:string =''
 public userr:string =''



 get namess(){return this.signupForm.get('names');}
 get surnames(){return this.signupForm.get('surname');}
 get emails(){return this.signupForm.get('email');}
 get passwords(){return this.signupForm.get('password');}
 get confmPass(){return this.signupForm.get('confPass');}
 get useres(){return this.signupForm.get('usere');}


 get f(){return this.signupForm.controls}

 clickhandle()
 {

      console.log("im here");
       console.log(this.name);
       console.log(this.surnam);
       console.log(this.emal);
       console.log(this.passwrd);

   this.submitted = true;

   
   

   if(this.signupForm.invalid)
   {
    // this.hold = this.registerForm.invalid;
     console.log(this.hold);
     console.log('invalid');

     
     return;
   }else 
   {

     //this.hold = this.registerForm.valid;

     console.log(this.hold);
     console.log('valid');

     this.service.getSignup({"fullName":this.name, "lastName":this.surnam, "emailAddress":this.emal , "password":this.passwrd  }).subscribe((res)=>{
      console.log(this.name);
       console.log(this.surnam);
       console.log(this.emal);
       console.log(this.passwrd);

       if(res.message =="Application Successfully submited")
       {
           alert(res.message);
           this.signupForm.reset();
           this.route.navigate(["home"])
      }
      else{
         alert(res.message);
       }
        

      });
     
   }

   


 }

}


 