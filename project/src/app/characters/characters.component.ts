import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  disableprevious = true;
  disablenext = false;
  indexno=0;
  loading=true;
  notloading=false;
  constructor(private data: DataserviceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    sessionStorage.removeItem('films');
    sessionStorage.removeItem('species');
    sessionStorage.removeItem('starship');
    sessionStorage.removeItem('vehicles');
    sessionStorage.removeItem('planet');
    
    
    if( sessionStorage.getItem('character')){
      this.people = JSON.parse((sessionStorage.getItem('character')) as any)
      this.loading = false;
    this.notloading = true;
      
    }
    else {

    
    let url = 'https://swapi.dev/api/people/'
    this.userSubs = this.data.getPeople(url).subscribe({
      next:(users)=> {
        console.log(users);
        
        this.people = users;
        this.loading = false;
        this.notloading = true;
        // this.people = this.people['results']

      },
      complete:()=> console.log('request fetched'),
      error:(err)=> console.log(err),
    });
  }
    // console.log(this.users);
    
  }

  
display(){
  // this.details = true;
  // this.list = false;
  // this.router.navigate(['yoda'], {relativeTo:this.route});
}
displist(){
  this.details = false;
  this.list = true;
}
previous(){
  this.loading = true;
  this.notloading = false;
  this.data.getPeople(this.people?.previous).subscribe(data=>{
    this.people = data; 
    this.loading = false;
      this.notloading = true;
    if(this.people?.previous){
      this.disableprevious = false;
      this.disablenext = false;
     
    sessionStorage.setItem('character',JSON.stringify(this.people))
    }
    else{
      this.disableprevious = true;
      this.disablenext = false;
     
    } 
  })
}
next(){
  this.loading = true;
  this.notloading = false;
  this.data.getPeople(this.people?.next).subscribe(data=>{
    this.people = data;  
    this.loading = false;
    this.notloading = true;

    if(this.people?.next){
      this.disableprevious = false;
      this.disablenext = false;
    sessionStorage.setItem('character',JSON.stringify(this.people))
    }
    else{
      this.disableprevious = false;
      this.disablenext = true;
      
    }
  })
}
 storename(name:any){
 console.log(name);
 this.indexno +=1
 localStorage.setItem('indexno',JSON.stringify(this.indexno));
 localStorage.setItem('details',JSON.stringify(name))
 this.router.navigate(['yoda'], {relativeTo:this.route});
 this.list = false;
 this.details = true;
 } 

 displaychild(){
  this.list = true;
  this.details = false;
  
}
displayparent(){
  this.list =false;
  this.details = true;
}

}
