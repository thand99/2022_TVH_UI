import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { dialogModel } from './dialog.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  formValue!: FormGroup;
  dialogModelLeader: dialogModel = new dialogModel();
  api: any;

  constructor(private formBuilder:FormBuilder) { }
  

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstname: [''],
      surname: [''],
      image: [''],
      category: [''],
      description: ['']
    })
  }

  postLeaderDetails(){
    this.dialogModelLeader.name = this.formValue.value.name;
    this.dialogModelLeader.surname = this.formValue.value.surname;
    this.dialogModelLeader.image = this.formValue.value.image;
    this.dialogModelLeader.category = this.formValue.value.category;
    this.dialogModelLeader.description = this.formValue.value.description;


    this.api.postLeader(this.dialogModelLeader).subscrribe((res: any)=>{
      console.log(res);
      alert("Leader Record Addes Succsesfully !");
      this.formValue.reset();
    },
      (err: any)=>{
      alert("something went wrong !");
    })

  }


}
