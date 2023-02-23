import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../sharing/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[]=[
    new Ingredient('potato', 4),
    new Ingredient('shimla mirch',2)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
