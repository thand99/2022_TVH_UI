import { Component, OnInit } from '@angular/core';
import { RegAPIService } from '../reg-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit
{


   first_last_name:string="";
   gender  :string="";
   birth_date  :string="";
   student_mail :string="";
   institution : string="";
   registration_proof :string="";
   mobile_number  :string="";
   programing_skills  :string="";
   applicant_status :string="";
   information_source  :string="";


  constructor(private service:RegAPIService, private route:Router) { }

  ngOnInit(): void {

  }

  clickhandle(){

    this.service.getBody(
      {
        "first_last_name":this.first_last_name, "gender": this.gender,"birth_date": this.birth_date,"student_mail": this.student_mail,"institution": this.institution,
        "registration_proof":this.registration_proof,"mobile_number": this.mobile_number, "programing_skills": this.programing_skills,"applicant_status":this.applicant_status,
        "information_source":this.information_source
      }).subscribe((res)=>
      {

      console.log(res.message);

      if(res.message =="Data captured Successful")
      {

          this.route.navigate(["home"])
      }
      else{

        alert(res.message);
      }
    })
  }
}
