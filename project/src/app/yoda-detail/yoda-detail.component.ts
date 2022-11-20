import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-yoda-detail',
  templateUrl: './yoda-detail.component.html',
  styleUrls: ['./yoda-detail.component.css']
})
export class YodaDetailComponent implements OnInit {
  details :any;
  info:any;
  userSubs :any;
  product= [{
   url: 'https://www.gstatic.com/webp/gallery3/1.png'
  },
]
array =['assets/lukeskywalker.png']

  constructor(private service: DataserviceService) { 
   
  }

  ngOnInit(): void {
    this.getdetails();
  
    
    
  }
  
  getdetails(){
    this.details = JSON.parse(localStorage.getItem('details')as any);
    
  }
 
}
