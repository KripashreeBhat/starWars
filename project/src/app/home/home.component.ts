import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CacheApiService } from '../cache-api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  display= true;
  data:any;
  remem:any;
  isValue : number = 0;
  constructor(private route : Router, private service:CacheApiService ,private http : HttpClient) { }

  ngOnInit(): void {
    
  }
 clickstore(){
  //  this.remem = localStorage.setItem('nav-value',JSON.stringify(this.isValue))
  //  console.log(this.remem);
   
 } 

displayfilms(){
  // this.isValue = 1;
  // this.remem = localStorage.setItem('nav-value',JSON.stringify(this.isValue))
  this.route.navigate(['/films']);
}
displayspecies(){
  // this.isValue = 2;
  // this.remem = localStorage.setItem('nav-value',JSON.stringify(this.isValue))
  this.route.navigate(['/species']);
}
displayplanet(){
  // this.isValue = 3;
  // this.remem = localStorage.setItem('nav-value',JSON.stringify(this.isValue))
  this.route.navigate(['/planet']);
  
}

displaychar(){
  // this.isValue = 4;
  // this.remem = localStorage.setItem('nav-value',JSON.stringify(this.isValue))
  // this.route.navigate(['/characters']);
  
}

displaystarship(){
  // this.isValue = 5;
  // this.remem = localStorage.setItem('nav-value',JSON.stringify(this.isValue))
  this.route.navigate(['/starship']);
  
}
displayvehicle(){
  // this.isValue = 6;
  // this.remem = localStorage.setItem('nav-value',JSON.stringify(this.isValue))
  this.route.navigate(['/vehicle']);
  
}

}
