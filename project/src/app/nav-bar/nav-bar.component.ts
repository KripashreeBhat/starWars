import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  value:any;
  remem:any;
  isValue:number = 0
  constructor( private route : Router) { }

  ngOnInit(): void {

  
}
 
// displayfilms(){
//   // this.remem = localStorage.setItem('nav-value',JSON.stringify(this.isValue))
//   // this.remem = localStorage.getItem('nav-value')
//   this.route.navigate(['/films']);
  
// }
// displayspecies(){
//   this.isValue = 2;
//   this.remem = localStorage.setItem('nav-value',JSON.stringify(this.isValue))
//   this.route.navigate(['/species']);
// }
// displayplanet(){
//   this.isValue = 3;
//   this.remem = localStorage.setItem('nav-value',JSON.stringify(this.isValue))
//   this.route.navigate(['/planet']);
  
// }

// displaychar(){
//   this.isValue = 4;
//   this.remem = localStorage.setItem('nav-value',JSON.stringify(this.isValue))
//   this.route.navigate(['/characters']);
  
// }

// displaystarship(){
//   this.isValue = 5;
//   this.remem = localStorage.setItem('nav-value',JSON.stringify(this.isValue))
//   this.route.navigate(['/starship']);
  
// }
// displayvehicle(){
//   this.isValue = 6;
//   this.remem = localStorage.setItem('nav-value',JSON.stringify(this.isValue))
//   this.route.navigate(['/vehicle']);
  
// }
}
