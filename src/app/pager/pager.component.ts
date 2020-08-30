import { Component, OnInit } from '@angular/core';
import { PageParams } from '../models/PageParams';
import {HttpService} from '../models/http.service';
import {WeatherParams} from '../models/interfaces';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css'],
  providers: [HttpService]
})
export class PagerComponent implements OnInit {

  pageParams: PageParams;
  weatherArray: WeatherParams;
  list: WeatherParams[];

  constructor(private httpService: HttpService, page: PageParams ) {
    this.pageParams = page;
  }

  ngOnInit() {
    this.getWeather();
  }

  getWeather(): void {
    this.httpService.getData()
        .subscribe(
            result => {
              console.log(result);
              this.weatherArray = result;
              this.list = this.weatherArray.list[this.pageParams.pageNumber];
            }, error => {
              console.log(error);
              alert('Ресурс не обнаружен!');
            }
        );
  }

}
