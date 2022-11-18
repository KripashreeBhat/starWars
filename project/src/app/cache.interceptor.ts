import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';

import { CacheApiService } from './cache-api.service';
import { Observable, of, tap } from 'rxjs';
const TIME_TO_LIVE = 6000;
@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(private service : CacheApiService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(request.method !== 'GET'){
      //just get is  cached
    return next.handle(request)
  }

  const CachedResponse = this.service.get(request.url);
  return CachedResponse ? of(CachedResponse) : this.sendRequest(request,next);
}
 sendRequest(request: HttpRequest<any>, 
  next: HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(request).pipe(
      tap((event:any) => {
        if(event instanceof HttpResponse){
          this.service.set(request.url,event,TIME_TO_LIVE)
        }
      })
      )
    
  }
}