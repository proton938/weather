import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getData(){
        return this.http.get('http://api.openweathermap.org/data/2.5/forecast?id=1508291&appid=ed6c13fd9f9650fc47d14f2d53b75a96')
    }
}
