import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService} from '../models/http.service';
import { ApiParams } from '../models/ApiParams';
import { WeatherParams } from '../models/interfaces';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css'],
  providers: [HttpService]
})
export class PredictionComponent implements OnInit {

  apiParams: ApiParams = new ApiParams();
  weatherArray: WeatherParams;

  constructor(private httpService: HttpService, private router: Router) { }

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
    this.router.navigate(['page', dt]);
  }

}
