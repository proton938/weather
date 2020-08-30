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

    apiParams: ApiParams;
    weatherArray: CurrentWeatherParams;
    rKeyDisp: boolean = false;

  constructor(private httpService: HttpService, private router: Router, api: ApiParams) {
      this.apiParams = api;
  }

  ngOnInit() {
      if (this.apiParams.key != '') {
          this.getCurrentWeather();
          this.rKeyDisp = true;
      }
  }

  getCurrentWeather(): void {
    this.httpService.getTodayData()
        .subscribe(
            result => {
              console.log(result);
              this.weatherArray = result;
                this.rKeyDisp = true;
            }, error => {
              console.log(error);
                this.rKeyDisp = false;
            }
        );
  }

    readKey() {
        var rKey = (<HTMLInputElement>document.getElementById('inputKey')).value;
        if (rKey != '') {
            this.apiParams.key = rKey;
            this.getCurrentWeather();
        }
    }

}
