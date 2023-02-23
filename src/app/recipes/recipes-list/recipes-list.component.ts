import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('chilli potato', 'this a delicious chienese food', './assets/download.jpg'),
    new Recipe('chowmin', 'this a delicious chienese food', './assets/chowmin.jpg'),
    new Recipe('momos', 'this a delicious chienese food', './assets/momos.jpg')
  ];
  constructor() { }

  ngOnInit(): void {

  } 

}

