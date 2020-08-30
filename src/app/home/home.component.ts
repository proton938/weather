import { Component, OnInit } from '@angular/core';
import {ApiParams} from '../models/ApiParams';
import {CurrentWeatherParams} from '../models/interfaces';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService} from '../models/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HttpService]
})
export class HomeComponent implements OnInit {

  apiParams: ApiParams = new ApiParams();
  weatherArray: CurrentWeatherParams;

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.getCurrentWeather();
  }

  getCurrentWeather(): void {
    this.httpService.getTodayData()
        .subscribe(
            result => {
              console.log(result);
              this.weatherArray = result;
            }, error => {
              console.log(error);
              alert('Ресурс не обнаружен!');
            }
        );
  }

}
