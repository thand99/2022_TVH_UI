<<<<<<< Updated upstream
import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { DialogComponent } from '../dialog/dialog.component';


export interface PeriodicElement {
  position: number;
  name: string;
  surname: string;
  category: string;
  description: string;
  action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
 
];

=======
import { Component, OnInit, ViewChild } from '@angular/core';


>>>>>>> Stashed changes
@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
<<<<<<< Updated upstream
export class ParticipantComponent {

  selectedFile!: File;
  displayedColumns: string[] = ['no', 'name', 'surname', 'category', 'description', 'action'];
  dataSource = [...ELEMENT_DATA];


  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;
=======
export class ParticipantComponent implements OnInit {
>>>>>>> Stashed changes

  


<<<<<<< Updated upstream
  constructor(private http: HttpClient, public dialog: MatDialog) {}
=======
  constructor() {}
  
  ngOnInit(): void {
   
  }
  

  
>>>>>>> Stashed changes

 

    




}
