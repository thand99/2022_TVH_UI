import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { Router } from '@angular/router';
import {ReactiveFormsModule, FormsModule, Validators, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {  EventEmitter, Input, Output } from '@angular/core';



interface institutess {
  value: string;
  viewValue: string;
}

interface genders {
  value: string;
  viewValue: string;
}

interface skillss {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
  
})





export class RegistrationFormComponent implements OnInit {
  

  name = 'Angular';
  
  
  //reactiveForm: registerForm;
  //registerForm: FormGroup;
  submitted: boolean = false;

  constructor(private service:ApiserviceService, private route:Router, private formBuilder: FormBuilder) {

   }

 // registerForm!: FormGroup;

  institutes: institutess[] = [
    {value: 'tut', viewValue: 'Tshwane University Of Technology'},
    {value: 'up', viewValue: 'University Pretoria'},
    {value: 'smu', viewValue: 'Sefako Makgatho University'},
    {value: 'unisa', viewValue: 'Unisa'}
  ];

  genders: genders[] = [
    {value: 'M', viewValue: 'Male'},
    {value: 'F', viewValue: 'Female'},

  ];

    skill: skillss[] = [
    {value: 'An', viewValue: 'Analyst'},
    {value: 'Prgm', viewValue: 'Programmer'},
    {value: 'Graphics', viewValue: 'Graphic designer'},
    {value: 'Maketr', viewValue: 'Marketer'},
    

  ];
 
 

  ngOnInit(): void {



    this.registerForm = new FormGroup({

      "names": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-z]*')]),///
      "surname": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-z]*')]),
      "genders": new FormControl(null,Validators.required ),
      "dates": new FormControl(null,Validators.required ),
      "email": new FormControl(null, [Validators.required, Validators.email]),///
      "institutes": new FormControl(null,Validators.required ),
      "academic": new FormControl(null,Validators.required ),
      "skill": new FormControl(null,Validators.required ),
      "mobileNumber": new FormControl(null,[Validators.required, Validators.pattern('[0-9]*')] ),
    })
  }


  
  myform!:FormGroup;


  public names :string =''
  public surname:string =''
  public gender:string =''
  public dateBirth:string =''
  public stud_email:string =''
  public institute:string =''
  public academicRecord:string =''
  public  mNumber:string =''
  public skills:string =''

 

  registerForm:any; ////

  //////////

  public hold :string =''


  ///submit Function

  get namess(){return this.registerForm.get('names');}
  get surnames(){return this.registerForm.get('surname');}
  get genderss(){return this.registerForm.get('genders');}
  get datess(){return this.registerForm.get('dates');}
  get emails(){return this.registerForm.get('email');}
  get institutess(){return this.registerForm.get('institutes');}
  get academicss(){return this.registerForm.get('academic');}
  get mobilenumber(){return this.registerForm.get('mobileNumber');}
  get skil(){return this.registerForm.get('skill');}
 

 
  
  
 // get pdfs(){return this.registerForm.get('pdf');}


 get f(){return this.registerForm.controls}






  clickhandle()
  {

    this.submitted = true;

    
    

    if(this.registerForm.invalid)
    {
     // this.hold = this.registerForm.invalid;
      console.log(this.hold);
      console.log('invalid');

      
      
      return;
    }else 
    {

      //this.hold = this.registerForm.valid;

      console.log(this.hold);
      console.log('not valid');

      this.service.getRegistration({"fullName":this.names, "surname":this.surname, "gender": this.gender,"dateOfBirth": this.dateBirth,"emailAddress": this.stud_email,"institution": this.institute,"academicRecord": this.academicRecord,"mobileNumber": this.mNumber,"skills": this.skills }).subscribe((res)=>{
        console.log(this.names);
        console.log(this.surname);
        console.log(this.gender);
        console.log(this.dateBirth);
        console.log(this.stud_email);
        console.log(this.institute);
        console.log(this.academicRecord);
        console.log(this.mNumber);
        console.log(this.skills);
        console.log(res.message);

        if(res.message =="Application Successfully submited")
        {
            alert(res.message);
            this.registerForm.reset();
            this.route.navigate(["home"])
        }
        else{
          alert(res.message);
        }
      });

      
    }

    


  }

  
  
}




  interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}
 




 
function requiredFileType(arg0: string): import("@angular/forms").ValidatorFn {
  throw new Error('Function not implemented.');
}

export class institute
{
    public ids:number | undefined;
    public institute:string | undefined;
} 