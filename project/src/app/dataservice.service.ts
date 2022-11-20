import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }
  getPeople( url:string ): Observable<HttpResponse<any>>{
    return this.http.get<HttpResponse<any>>(
      // 'https://swapi.dev/api/people/'
      url
    );

  }

  getImg(){
    return this.http.get('https://picsum.photos/v2/list').pipe(
      map((list: any) => {

        return list.map((listItem:any)=> {
          return {
            ...listItem,
            shown: false
          }
        })
        
      })
    );
  }
  }

