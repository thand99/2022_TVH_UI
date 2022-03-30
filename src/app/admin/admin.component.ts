import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   
  title ='Admin';
  fileName = 'applicants.xlsx';
  acc ="Accepted";
  rej = "Rejected";

  data = [

    {
      "no": 1,
      "name": "Nhlakanipho",
      "surname": "Makhaza",
      "email": "nhlakanipho19sphelele@gmail.com",
      "status": " "
    },
    {
      "no": 2,
      "name": "Nicolas",
      "surname": "Chauke",
      "email": "nicolaschauke44@gmail.com",
      "status": " "
    },
    {
      "no":3,
      "name":"Richard",
      "surname":"Sthole",
      "email":"richardsthole_56@gmail.com",
      "status": " "
    },
    {
      "no":4,
      "name":"Zandile",
      "surname":"Ngcobo",
      "email":"zandile_ngcobo@gmail.com",
      "status": " "
    },
    {
      "no":5,
      "name":"Sbongile",
      "surname":"Zondo",
      "email":"sbo76zondo@gmail.com",
      "status": " "
    },
    {
      "no":6,
      "name":"Tumelo",
      "surname":"Tsotetsi",
      "email":"tsotetsitumelo@gmail.com",
      "status": " "
    },
    {
      "no":7,
      "name":"Tumelo",
      "surname":"Tsotetsi",
      "email":"tsotetsitumelo@gmail.com",
      "status": " "
    },
    
    {
      "no":8,
      "name":"Tumelo",
      "surname":"Tsotetsi",
      "email":"tsotetsitumelo@gmail.com",
      "status": " "
    },
    
    {
      "no":9,
      "name":"Tumelo",
      "surname":"Tsotetsi",
      "email":"tsotetsitumelo@gmail.com",
      "status": " "
    }
  ]

  exportTableToExcel(): void {
    const element = document.getElementById('app-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName)

  }
  getStatus() {
     alert("Accepted")
  }
  getStatusRej() {
    alert("Rejected")
 }


  constructor() { }

  
  ngOnInit(): void {
  }



}
