import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-adminboard',
  templateUrl: './adminboard.component.html',
  styleUrls: ['./adminboard.component.css']
})
export class AdminboardComponent implements OnInit {

  title ='Admin';
  fileName = 'applicants.xlsx';
  status = 'Pending..';

  exportTableToExcel(): void {
    const element = document.getElementById('app-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName)

  }


  getStatusAccepted(){
    console.log("Accepted");
    this.status ="Accepted"
  }
  getStatusRejected(){
    console.log("Rejected");
    this.status ="Rejected"
  }

  constructor(private service:ApiserviceService, private route:Router) { }


  readData:any;
  ngOnInit(): void {

    this.service.getadminLoadFile().subscribe((res) =>{
      console.log(res, "res==>");

      this.readData = res.data;
  })

    
  }

 
    


}
