import { Component } from '@angular/core';
import { Tile } from './model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mni';

  

  tiles: Tile[] = [
    {text: 'Bill of Supply', cols: 4, rows: 1, color: 'lightblue'},//bill of supply

    {text: 'Two', cols: 2, rows: 3, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'five', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'six', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Seven', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'eight', cols: 1, rows: 1, color: '#DDBDF1'},


    {text: 'Two1', cols: 2, rows: 2, color: 'lightgreen'},
    {text: 'Three1', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four1', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'five1', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'six1', cols: 1, rows: 1, color: 'lightgreen'},
    // {text: 'Seven1', cols: 1, rows: 1, color: 'lightpink'},
    // {text: 'eight1', cols: 1, rows: 1, color: '#DDBDF1'},
];
tiles2: Tile[] = [
  {text: 'Two2', cols: 1, rows: 1, color: 'lightgreen'},
  {text: 'Three2', cols: 3, rows: 1, color: 'lightpink'},
  {text: 'Four2', cols: 1, rows: 1, color: '#DDBDF1'},
  {text: 'five2', cols: 1, rows: 1, color: 'lightblue'},
  {text: 'six2', cols: 1, rows: 1, color: 'lightgreen'},
  {text: 'Seven2', cols: 1, rows: 1, color: 'lightpink'},
  {text: 'eight2', cols: 1, rows: 1, color: '#DDBDF1'},
  {text: 'nine2', cols: 2, rows: 1, color: 'lightblue'}
];

tiles3: Tile[] = [
  {text: 'Two3', cols: 1, rows: 7, color: 'lightgreen'},
  {text: 'Three3', cols: 3, rows:7, color: 'lightpink'},
  {text: 'Four3', cols: 1, rows: 7, color: '#DDBDF1'},
  {text: 'five3', cols: 1, rows: 7, color: 'lightblue'},
  {text: 'six3', cols: 1, rows: 7, color: 'lightgreen'},
  {text: 'Seven3', cols: 1, rows: 4, color: 'lightpink'},
  {text: 'eight3', cols: 1, rows: 4, color: '#DDBDF1'},
  {text: 'nine3', cols: 2, rows: 4, color: 'lightblue'},

  {text: 'ten3', cols: 1, rows: 1, color: 'lightpink'},
  {text: 'eleven3', cols: 3, rows: 1, color: '#DDBDF1'},
  {text: 'twelve3', cols: 1, rows: 1, color: 'lightblue'},
  {text: 'ten3', cols: 3, rows: 1, color: 'lightpink'},
  {text: 'twelve3', cols: 1, rows: 1, color: 'lightblue'},
  {text: 'ten3', cols: 3, rows: 1, color: 'lightpink'},
];

tiles4: Tile[] = [
  {text: 'Two4', cols: 6, rows: 1, color: 'lightpink'},

  {text: 'Three4', cols: 3, rows:3, color: 'lightpink'},
  {text: 'Four4', cols: 3, rows: 3, color: '#DDBDF1'},

  {text: 'Three4', cols: 4, rows:2, color: 'lightpink'},
  {text: 'Four4', cols: 2, rows: 2, color: '#DDBDF1'},
];
}
