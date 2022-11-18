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
  constructor(private route : Router, private service:CacheApiService ,private http : HttpClient) { }

  ngOnInit(): void {
  }
displaymenu(){
  this.display=false;
  this.route.navigate(['/characters']);
  // this.service.getUser().subscribe(res=>{
  //   console.log(res);
  // })
}

}
