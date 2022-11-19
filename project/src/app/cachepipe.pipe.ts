import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Pipe({
  name: 'titlecase',
  pure:false
})
export class CachepipePipe implements PipeTransform {
  transform(value: string, upper: boolean) {
    value= value.charAt(0).toUpperCase()+value.slice(1);
    if(upper){
      value = value.toUpperCase();
    }
    return value;
  }
  // private cachedAPIData : any = null;
  // private cacahedAPIurl = 'https://swapi.dev/api/people/';
  // constructor ( private http : HttpClient){}
  // transform(url :string):any{
  //   if( url !== this.cacahedAPIurl){
  //     this.cachedAPIData = null;
  //     this.cacahedAPIurl = url;
  //     this.http.get(url).subscribe(result => this.cachedAPIData = result);
  //   } 
  //   return this.cachedAPIData;

  // }

}
