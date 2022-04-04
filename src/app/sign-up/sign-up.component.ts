import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { Router } from '@angular/router';
import {ReactiveFormsModule, FormsModule, Validators, FormGroup, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  submitted: boolean = false;

  constructor(private service:ApiserviceService, private route:Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {


    this.signupForm = new FormGroup({

      "names": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-z]*')]),///
      "surname": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-z]*')]),
      "email": new FormControl(null, [Validators.required, Validators.email]),///
      "password": new FormControl(null,[Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-z]*')]),
      "confPass": new FormControl(null,Validators.required ),
    })
  }


 signupForm:any;
 public hold :string =''



 public names :string =''
 public surname:string =''
 public email:string =''
 public password:string =''
 public confPass:string =''



 get namess(){return this.signupForm.get('names');}
 get surnames(){return this.signupForm.get('surname');}
 get emails(){return this.signupForm.get('email');}
 get passwords(){return this.signupForm.get('password');}
 get confmPass(){return this.signupForm.get('confPass');}


 get f(){return this.signupForm.controls}

 clickhandle()
 {

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

     this.service.getSignup({"fullName":this.names, "lastName":this.surname, "emailAddress":this.email , "password":this.password  }).subscribe((res)=>{
      console.log(this.names);
       console.log(this.surname);
       console.log(this.email);
       console.log(this.password);

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
