import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  list = true;
  details = false;
  // array =['DARTH VADER','LUKE SKYWALKER','OBI-WAN KENOBI','YODA']
  userSubs !: Subscription;
  users : any[] = [];
  people :any;
  nextdata:any;
  name:any;
  constructor(private data: DataserviceService) { }

  ngOnInit(): void {
    let url = 'https://swapi.dev/api/people/'
    this.userSubs = this.data.getPeople(url).subscribe({
      next:(users)=> {
        console.log(users);
        
        this.people = users;
        // this.people = this.people['results']

      },
      complete:()=> console.log('request fetched'),
      error:(err)=> console.log(err),
    });
    
    // console.log(this.users);
    
  }
// getdetail(){
//   let url = 'https://swapi.dev/api/people/'
//     this.userSubs = this.data.getPeople(url).subscribe({
//       next:(users)=> console.log('data reciceved',users),
//       complete:()=> console.log('request fetched'),
//       error:(err)=> console.log(err),
//       });
      
      
// }
  
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
  })
}
next(){
  
  this.data.getPeople(this.people?.next).subscribe(data=>{
    this.people = data;  
  })
}
 storename(name:any){
 console.log(name);
 localStorage.setItem('details',JSON.stringify(name))
 
 } 
  
}
