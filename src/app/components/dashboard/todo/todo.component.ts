import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  name: String = '';
  items = [
    {
      itemId: 1,
      itemName: "Bitcoin",
    },
    {
      itemId: 2,
      itemName: "Ethereum",
    },
    {
      itemId: 3,
      itemName: "Tether",
    }
  ];
  addItem = () => {


  }

  removeItem = () => {

  }


  constructor() { }

  ngOnInit(): void {
  }

}
