import { Component, OnInit } from '@angular/core';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }
  faArrow = faCircleArrowLeft;

  ngOnInit(): void {
  }

}
