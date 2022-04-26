import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-annoucement',
  templateUrl: './public-annoucement.component.html',
  styleUrls: ['./public-annoucement.component.css']
})
export class PublicAnnoucementComponent implements OnInit {

  constructor(private service:ApiserviceService, private route:Router) { }

  readData:any;

  ngOnInit(): void {


    this.service.getnoticeLoadFile().subscribe((res) =>{
      console.log(res, "res==>");

      this.readData = res.data;
  })
  }

}
