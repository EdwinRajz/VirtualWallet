import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
  @Input() coins: any;

  constructor() { }

  ngOnInit(): void {

  }
  
}
