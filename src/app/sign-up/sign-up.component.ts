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
    {value: 'Student', viewValue: 'Student'},
    {value: 'Visitor', viewValue: 'Visitor'}

  ];

  ngOnInit(): void {

    

    this.signupForm = new FormGroup({

      "name": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-z]*')]),///
      "surnamee": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-z]*')]),
      "email": new FormControl(null, [Validators.required, Validators.email]),///
      "passwordi": new FormControl(null,[Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-z]*')]),
      "confPass": new FormControl(null,[Validators.required] ),
      "Usere": new FormControl(null,Validators.required )
    },
    {
        validators:<any> this.MustMatch('passwordi','confPass')

    })
  }


  MustMatch(controlName:string, matchingControlName: string){

    return(FormGroup:FormGroup) =>{


      const control = FormGroup.controls[controlName];
      const matchingControl = FormGroup.controls[matchingControlName];

      if(matchingControl.errors && !matchingControl.errors['MustMatch']){

        return
      }
      if(control.value !== matchingControl.value)
      { 
        matchingControl.setErrors({MustMatch:true})
      }
      else{

        matchingControl.setErrors(null)
      }
    } 
  }



 signupForm:any;
 public hold :string =''

 

 public names :string =''
 public surname:string =''
 public emal:string =''
 public password:string =''
 public confPas:string =''
 public userr:string =''



 get namess(){return this.signupForm.get('name');}
 get surnames(){return this.signupForm.get('surnamee');}
 get emails(){return this.signupForm.get('email');}
 get passwords(){return this.signupForm.get('passwordi');}
 get confmPass(){return this.signupForm.get('confPass');}
 get useres(){return this.signupForm.get('usere');}


 get f(){return this.signupForm.controls}


 clickhandle()
 {

      console.log("im here");
       console.log(this.names);
       console.log(this.surname);
       console.log(this.emal);
       console.log(this.password);
       console.log(this.confPas);

   this.submitted = true;

   
   

   if(this.signupForm.invalid)
   {
    // this.hold = this.registerForm.invalid;
     //console.log(this.hold);
     console.log('invalid');
     
   
   }else
    {



      console.log(this.hold);
      console.log('valid');

    }

   


 }

}


 