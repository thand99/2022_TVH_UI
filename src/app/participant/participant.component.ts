import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
  
  afuConfig = {
    uploadAPI: {
      url:"https://example-file-upload-api"
    }
  };






  constructor() { }

  

 
  ngOnInit(): void {
  }

  



}
