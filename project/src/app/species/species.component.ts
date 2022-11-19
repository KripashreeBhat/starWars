import { Component, OnInit } from '@angular/core';
 import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

 
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
    sessionStorage.removeItem('planet');
    sessionStorage.removeItem('starship');
    sessionStorage.removeItem('vehicles');
    sessionStorage.removeItem('films');

    if( sessionStorage.getItem('species')){
      this.people = JSON.parse((sessionStorage.getItem('species')) as any)
    }
    else{

    
    let url = 'https://swapi.dev/api/species/'
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
    sessionStorage.setItem('species',JSON.stringify(this.people)) 
  })
}
next(){
  
  this.data.getPeople(this.people?.next).subscribe(data=>{
    this.people = data;  
    sessionStorage.setItem('species',JSON.stringify(this.people)) 
  })
}
 storename(name:any){
 console.log(name);
 localStorage.setItem('details',JSON.stringify(name))
 
 } 
  
 

}
