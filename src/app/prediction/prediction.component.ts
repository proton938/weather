import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService} from '../models/http.service';
import { PageParams } from '../models/PageParams';
import { WeatherParams } from '../models/interfaces';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css'],
  providers: [HttpService]
})
export class PredictionComponent implements OnInit {

  weatherArray: WeatherParams;
  pageParams: PageParams;

  constructor(private httpService: HttpService, private router: Router, page: PageParams) {
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
            }, error => {
              console.log(error);
              alert('Ресурс не обнаружен!');
            }
        );
  }


  goToPage(dt) {
      this.pageParams.pageNumber = dt;
      this.router.navigate(['page', dt]);
  }

}
