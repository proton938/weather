import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ApiParams } from './ApiParams';
import { WeatherParams, CurrentWeatherParams } from './interfaces';
  
@Injectable()
export class HttpService{

    apiParams: ApiParams = new ApiParams();

    constructor(private http: HttpClient){ }

    getTodayData() {
        return this.http.get<CurrentWeatherParams>('http://api.openweathermap.org/data/2.5/weather?id=1508291&appid=' + this.apiParams.key );
    }

    getData() {
        return this.http.get<WeatherParams>('http://api.openweathermap.org/data/2.5/forecast?id=1508291&appid=' + this.apiParams.key );
    }
}

