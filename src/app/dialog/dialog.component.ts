import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
=======
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
>>>>>>> Stashed changes

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
<<<<<<< Updated upstream

  constructor() { }

  ngOnInit(): void {
  }

=======
  
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
>>>>>>> Stashed changes
}
