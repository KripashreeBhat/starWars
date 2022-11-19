import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-species-detail',
  templateUrl: './species-detail.component.html',
  styleUrls: ['./species-detail.component.css']
})
export class SpeciesDetailComponent implements OnInit {


  details :any;
  info:any;
  userSubs :any;
  constructor(private service: DataserviceService) { 
   
  }

  ngOnInit(): void {
    // console.log('jiehyhi');
    // let url = 'https://swapi.dev/api/people/'
    // this.userSubs = this.service.getPeople(url).subscribe((data )=>{
    //   console.log(data);
      
    // })
    this.getdetails();
  
   
  
}
getdetails(){
  this.details = JSON.parse(localStorage.getItem('details')as any);
  // console.log(this.details);
  // console.log(this.details['name']);
}

}
