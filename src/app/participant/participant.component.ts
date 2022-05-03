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

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent {

  selectedFile!: File;
  displayedColumns: string[] = ['no', 'name', 'surname', 'category', 'description', 'action'];
  dataSource = [...ELEMENT_DATA];


  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }


  constructor(private http: HttpClient, public dialog: MatDialog) {}

  openDialog() {
      this.dialog.open(DialogComponent, {
      
    });
  }
 
  onFileSelected(event: any)
  {
    this.selectedFile = <File>event.target.files[0];
  }

    




}
