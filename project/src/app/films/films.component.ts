import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  list = true;
  details = false;
  // array =['DARTH VADER','LUKE SKYWALKER','OBI-WAN KENOBI','YODA']
  // userSubs !: Subscription;
  userSubs : any;
  users : any[] = [];
  people :any;
  nextdata:any;
  name:any;
  constructor(private data: DataserviceService) { }

  ngOnInit(): void {
    sessionStorage.removeItem('character');
    sessionStorage.removeItem('species');
    sessionStorage.removeItem('starship');
    sessionStorage.removeItem('vehicles');
    sessionStorage.removeItem('planet');
    if( sessionStorage.getItem('films')){
      this.people = JSON.parse((sessionStorage.getItem('films')) as any)
    }
    else{

   
    let url = 'https://swapi.dev/api/films/'
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
    sessionStorage.setItem('films',JSON.stringify(this.people)) 
  })
}
next(){
  
  this.data.getPeople(this.people?.next).subscribe(data=>{
    this.people = data;  
    sessionStorage.setItem('films',JSON.stringify(this.people)) 
  })
}
 storename(name:any){
 console.log(name);
 localStorage.setItem('details',JSON.stringify(name))
 
 } 
}
