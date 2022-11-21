import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  disableprevious = true;
  disablenext = true;
  indexno=0;
  loading=true;
  notloading=false;
  constructor(private data: DataserviceService , private route: ActivatedRoute, private router: Router) { }
   
  ngOnInit(): void {
    sessionStorage.removeItem('character');
    sessionStorage.removeItem('species');
    sessionStorage.removeItem('starship');
    sessionStorage.removeItem('vehicles');
    sessionStorage.removeItem('planet');
    // this.disableprevious = true;
    if( sessionStorage.getItem('films')){
      this.people = JSON.parse((sessionStorage.getItem('films')) as any)
      this.loading = false;
      this.notloading = true;
    }
    else{

   
    let url = 'https://swapi.dev/api/films/'
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
  this.loading = true;
  this.notloading = false;
  this.data.getPeople(this.people?.previous).subscribe(data=>{
    this.people = data; 
    this.loading = false;
      this.notloading = true;
    if(this.people?.previous){ 
    sessionStorage.setItem('films',JSON.stringify(this.people))
    this.disableprevious = false;
    this.disablenext = false;
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
    this.loading = false;
    this.notloading = true;
    this.people = data; 
    if(this.people?.next){ 
      this.disableprevious = false;
      this.disablenext = false;
    sessionStorage.setItem('films',JSON.stringify(this.people))
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
 localStorage.setItem('details',JSON.stringify(name));
 this.router.navigate(['filmdetail'], {relativeTo:this.route});
 this.list = false;
 this.details = true;
 } 
 
 displaychild(){
  this.list = true;
  this.details = false;
  
}
}
