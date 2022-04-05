import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  
  myScriptElement!: HTMLScriptElement;
  
  constructor() { 
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src ="https://cdn.ckeditor.com/4.17.1/full-all/ckeditor.js";
    document.body.appendChild(this.myScriptElement);
  }

  ngOnInit(): void {
  }

  ckeditorContent = "";

  


  
}
