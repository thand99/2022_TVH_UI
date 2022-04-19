import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { Router } from '@angular/router';
import {ReactiveFormsModule, FormsModule, Validators, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {  EventEmitter, Input, Output } from '@angular/core';

///for drop down
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

interface levels {
  value: string;
  viewValue: string;
}

interface camp {
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
    {value: 'Faculty Of Information And Communication Technology', viewValue: 'Faculty Of Information And Communication Technology'},
    {value: 'Faculty Of Management Sciences', viewValue: 'Faculty Of Management Sciences'},
    {value: 'Faculty Of Arts And Design', viewValue: 'Faculty Of Arts And Design'},
  
  ];

  genders: genders[] = [
    {value: 'M', viewValue: 'Male'},
    {value: 'F', viewValue: 'Female'},

  ];

    skill: skillss[] = [
    {value: 'Analyst', viewValue: 'Analyst'},
    {value: 'Frontend Developer', viewValue: 'Frontend Developer'},
    {value: 'Backend Developer', viewValue: 'Backend Developer'},
    {value: 'Marketer', viewValue: 'Marketer'},
    {value: 'Graphic designer', viewValue: 'Graphic designer'},

    
    

  ];
  level: levels[] = [
    {value: 'First Year', viewValue: 'First Year'},
    {value: 'Second Year', viewValue: 'Second Year'},
    {value: 'Final Year', viewValue: 'Final Year'},
 
  ];



  camps: camp[] = [
    {value: 'Soshanguve Campus', viewValue: 'Soshanguve Campus'},
    {value: 'Emalahleni Campus', viewValue: 'Emalahleni Campus'},
    {value: 'Pretoria Campus', viewValue: 'Pretoria Campus'},
    {value: 'Art Campus', viewValue: 'Art Campus'},
    {value: 'Garankuwa Campus', viewValue: 'Garankuwa Campus'},
 
  ];
 
 

  ngOnInit(): void {



    this.registerForm = new FormGroup({

      "studentNumber": new FormControl(null,[Validators.required, Validators.pattern('[0-9]*')] ),
      "names": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-z]*')]),///
      "surname": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-z]*')]),
      "genders": new FormControl(null,Validators.required ),
      "campuses": new FormControl(null,Validators.required ),
      "dates": new FormControl(null,Validators.required ),
      "email": new FormControl(null, [Validators.required, Validators.email]),///
      "institutes": new FormControl(null,Validators.required ),
      "special": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-z]*')]),
      "mobileNumber": new FormControl(null,[Validators.required, Validators.pattern('[0-9]*')] ),
      "skill": new FormControl(null,Validators.required ),
      "level": new FormControl(null,Validators.required ),
      "hobby": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-z]*')]),
      
      
      
      
      
      
      
      
    })
  }


  
  myform!:FormGroup;

  public student :string =''
  public names :string =''
  public surname:string =''
  public gender:string =''
  public dateBirth:string =''
  public stud_email:string =''
  public facult:string =''
  public  mNumber:string =''
  public skills:string =''
  public leve:string =''
  public spec:string =''
  public hob:string =''
  public campus:string =''
  

 

  registerForm:any; ////

  //////////

  public hold :string =''


  ///submit Function

  get studentNumbers(){return this.registerForm.get('studentNumber');}
  get namess(){return this.registerForm.get('names');}
  get surnames(){return this.registerForm.get('surname');}
  get genderss(){return this.registerForm.get('genders');}
  get datess(){return this.registerForm.get('dates');}
  get emails(){return this.registerForm.get('email');}
  get institutess(){return this.registerForm.get('institutes');}
  get mobilenumber(){return this.registerForm.get('mobileNumber');}
  get skil(){return this.registerForm.get('skill');}
  get lev(){return this.registerForm.get('level');}
  get specs(){return this.registerForm.get('special');}
  get hobs(){return this.registerForm.get('hobby');}
  get campusess(){return this.registerForm.get('campuses');}
  

 

 
  
  
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
      console.log('valid');



      this.service.getRegistration({"student_number":this.student, "student_name":this.names, "student_surname": this.surname,"student_gender": this.gender,"student_dob": this.dateBirth,"student_email": this.stud_email,"student_cellno": this.mNumber,"participant_skills": this.skills, "student_faculty": this.facult,"specialization": this.spec, "student_level": this.leve, "student_campus": this.campus, "student_hobby": this.hob }).subscribe((res)=>{
        console.log(this.names);
        console.log(this.surname);
        console.log(this.gender);
        console.log(this.dateBirth);
        console.log(this.stud_email);
        console.log(this.facult);
       
        console.log(this.mNumber);
        console.log(this.skills);
        console.log(res.message);

        if(res.message =="Application successfully captured✔✔✔")
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