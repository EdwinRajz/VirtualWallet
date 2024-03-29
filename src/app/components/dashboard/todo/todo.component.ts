import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() coins: any;
  newItemName: string = "";
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
  addItem = (inputName: string) => {

    if (inputName == "") {
      alert("Please add an item")
    }
    else {
      this.items.push({ itemId: (this.items.length + 1), itemName: inputName });
      console.log(this.items);
    }

  }

  deleteItem = (inputId: number) => {
    this.items = this.items.filter(obj => obj.itemId !== inputId);
  }

  constructor() { }

  ngOnInit(): void {
  }

}