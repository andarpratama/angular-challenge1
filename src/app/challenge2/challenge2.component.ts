import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge2',
  templateUrl: './challenge2.component.html',
  styleUrls: ['./challenge2.component.css']
})
export class Challenge2Component implements OnInit {
  keyword:any = '';
  constructor() { }

  ngOnInit(): void {
  }
  
  resetValue(value) {
     value = '';
  }

}
