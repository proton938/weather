import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ApiParams } from './ApiParams';
import { WeatherParams } from './interfaces';
  
@Injectable()
export class HttpService{

    apiParams: ApiParams = new ApiParams();

    constructor(private http: HttpClient){ }
      
    getData(){
        return this.http.get<WeatherParams>('http://api.openweathermap.org/data/2.5/forecast?id=1508291&appid=' + this.apiParams.key)
    }
}

