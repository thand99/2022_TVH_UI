import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-adminboard',
  templateUrl: './adminboard.component.html',
  styleUrls: ['./adminboard.component.css']
})
export class AdminboardComponent implements OnInit {

  title ='Admin';
  fileName = 'applicants.xlsx';
  status = 'Pending...';


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


  constructor() { }

  ngOnInit(): void {
  }

}
