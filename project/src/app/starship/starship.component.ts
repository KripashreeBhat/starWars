import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

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
    sessionStorage.removeItem('planet');
    sessionStorage.removeItem('vehicles');
    sessionStorage.removeItem('species');
    sessionStorage.removeItem('films');
     
    if( sessionStorage.getItem('starship')){
      this.people = JSON.parse((sessionStorage.getItem('starship')) as any)
    }
    else{

    
    let url = ' https://swapi.dev/api/starships/'
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
    if(this.people?.previous){
      this.disableprevious = false;
      this.disablenext = false;
    sessionStorage.setItem('starship',JSON.stringify(this.people))
    }
    else{
      this.disableprevious = true;
      this.disablenext = false;
    } 
  })
}
next(){
  
  this.data.getPeople(this.people?.next).subscribe(data=>{
    this.people = data; 

    if(this.people?.next){
      this.disableprevious = false;
      this.disablenext = false;
    sessionStorage.setItem('starship',JSON.stringify(this.people))
    }
    else{
      this.disableprevious = false;
      this.disablenext = true;
    } 
  })
}
 storename(name:any){
 console.log(name);
 localStorage.setItem('details',JSON.stringify(name))
 
 
 } 
  
 
}
