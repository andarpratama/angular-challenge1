import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge3',
  templateUrl: './challenge3.component.html',
  styleUrls: ['./challenge3.component.css']
})
export class Challenge3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
   status: boolean = false;
   angka = []
   clickEvent(){
      this.status = !this.status;
      this.angka.push(this.angka.length + 1)
   }
}
