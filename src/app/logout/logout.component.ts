import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    let confirmation = document.getElementById("confirmation");
    if (!confirmation?.classList.contains("medal-open")) {
      confirmation?.classList.add("medal-open");
    }
  }




}
