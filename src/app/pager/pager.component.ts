import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { PageParams } from '../models/PageParams';
import {HttpService} from '../models/http.service';
import {WeatherParams} from '../models/interfaces';
import {ApiParams} from '../models/ApiParams';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css'],
  providers: [HttpService]
})
export class PagerComponent implements OnInit {

    arrowDisp1: boolean = false;
    arrowDisp2: boolean = false;
    apiParams: ApiParams;

  pageParams: PageParams;
  weatherArray: WeatherParams;
  list: WeatherParams[];

  constructor(private httpService: HttpService, private router: Router, page: PageParams, api: ApiParams) {
    this.pageParams = page;
    this.apiParams = api;
  }

    ngOnInit() {
        if (this.apiParams.key != '') {
            this.getWeather();
        } else {
            this.router.navigate(['']);
        }
    }

  getWeather(): void {
    this.httpService.getData()
        .subscribe(
            result => {
              console.log(result);
              this.weatherArray = result;
              this.list = this.weatherArray.list[this.pageParams.pageNumber];

              if (this.pageParams.pageNumber < 1) {
                  this.arrowDisp1 = false;
              } else {this.arrowDisp1 = true;}
                if (this.pageParams.pageNumber > this.weatherArray.list.length-2) {
                    this.arrowDisp2 = false;
                } else {this.arrowDisp2 = true;}

            }, error => {
              console.log(error);
              alert('Ресурс не обнаружен!');
              this.router.navigate(['']);
            }
        );
  }

  nextPage() {
      this.pageParams.pageNumber++;
      this.getWeather();
  }

    backPage() {
        this.pageParams.pageNumber--;
        this.getWeather();
    }

}
