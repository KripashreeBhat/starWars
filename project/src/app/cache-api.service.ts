import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CacheApiService {
 private cache = new Map<string ,[Date,HttpResponse<any>]>();
 constructor(){} 
  set(key:any,  value:any, timeToLive:number | null = null) {
    console.log('set cache key' , key);

    if(timeToLive) {
      const expiresIn = new Date();
      expiresIn.setSeconds(expiresIn.getSeconds() + timeToLive);
      this.cache.set(key, [expiresIn,value]);
    }
      else{
        this.cache.set(key,[new Date(),value]);

      }
    }
    
    get(key:any):any | undefined{
      const tuple = this.cache.get(key);
      if(!tuple) return null;
      const expiresIn = tuple[0];
      const httpSavedResponse = tuple[1];
      const now = new Date();
      if(expiresIn && expiresIn.getTime() <now.getTime()){
        this.cache.delete(key);
        return null;
      }
      return httpSavedResponse;
    }
  }


