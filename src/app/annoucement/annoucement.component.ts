import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-annoucement',
  templateUrl: './annoucement.component.html',
  styleUrls: ['./annoucement.component.css']
})
export class AnnoucementComponent implements OnInit {

  editMode: boolean = false;
  private postId: string | undefined;

  constructor(public route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) { // the id passed in paramMap.has('id') has to be same as it define in routing module.
        this.editMode = true;

      } else {
        this.editMode = false;
      }
    });
  }

  ckeditorContent:any;



  savePost(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      if (this.editMode) {
        const post = {
          _id: this.postId,
          title: form.value.title,
          body: form.value.body,
        }
      } else {
        const post = {
          title: form.value.title,
          body: form.value.body
        }
      }
      this.router.navigate(['/']);
    }
  }





}
