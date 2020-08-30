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

    arrowDisp1: boolean = false;
    arrowDisp2: boolean = false;

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

              if (this.pageParams.pageNumber < 1) {
                  this.arrowDisp1 = false;
              } else {this.arrowDisp1 = true;}
                if (this.pageParams.pageNumber > this.weatherArray.list.length-2) {
                    this.arrowDisp2 = false;
                } else {this.arrowDisp2 = true;}

            }, error => {
              console.log(error);
              alert('Ресурс не обнаружен!');
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
