import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  list = true;
  details = false;
  // array =['DARTH VADER','LUKE SKYWALKER','OBI-WAN KENOBI','YODA']
  // userSubs !: Subscription;
  userSubs : any;
  users : any[] = [];
  people :any;
  nextdata:any;
  name:any;
  disableprevious = true;
  disablenext = false;
  constructor(private data: DataserviceService) { }

  ngOnInit(): void {
    sessionStorage.removeItem('character');
    sessionStorage.removeItem('species');
    sessionStorage.removeItem('starship');
    sessionStorage.removeItem('vehicles');
    sessionStorage.removeItem('films');
    // this.disableprevious = true;
    if( sessionStorage.getItem('planet')){
      this.people = JSON.parse((sessionStorage.getItem('planet')) as any)
    }
    else {
    let url = 'https://swapi.dev/api/planets/'
    this.userSubs = this.data.getPeople(url).subscribe({
      next:(users)=> {
        console.log(users);
        
        this.people = users;
        // this.people = this.people['results']

      },
      complete:()=> console.log('request fetched'),
      error:(err)=> console.log(err),
    });
  }
    // console.log(this.users);
    
  }

display(){
  this.details = true;
  this.list = false;
}
displist(){
  this.details = false;
  this.list = true;
}
previous(){
  this.data.getPeople(this.people?.previous).subscribe(data=>{
    this.people = data;  
    if(this.people?.previous){
      this.disableprevious = false;
      this.disablenext = false;
      sessionStorage.setItem('planet',JSON.stringify(this.people)) ;
      console.log(this.people?.previous);
      
    }
    else{
      this.disableprevious = true;
      this.disablenext = false;
      console.log(this.people?.previous);
    }
  })
}
next(){
  
  this.data.getPeople(this.people?.next).subscribe(data=>{
    this.people = data; 
    if(this.people?.next){
      this.disableprevious = false;
      this.disablenext = false;
      sessionStorage.setItem('planet',JSON.stringify(this.people)) 
    }
    else{
      this.disableprevious = false;
      this.disablenext = true;
      console.log(this.people?.next);
      
    }
   
  })
}
 storename(name:any){
 console.log(name);
 localStorage.setItem('details',JSON.stringify(name))
 
 } 
  
 

}
