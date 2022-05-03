import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  
  leaderForm !: FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
     this.leaderForm = this.formBuilder.group({
       name:['',Validators.required],
       surname:['',Validators.required],
       occupation:['',Validators.required],
       image:['', Validators.required],
       category:['',Validators.required],
       description:['',Validators.required],
      
     })
   }
   addLeader(){
     console.log(this.leaderForm.value);
   }
}
