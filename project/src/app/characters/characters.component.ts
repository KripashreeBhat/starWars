import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
   array =['DARTH VADER','LUKE SKYWALKER','OBI-WAN KENOBI','YODA']
  constructor() { }

  ngOnInit(): void {
  }

}
