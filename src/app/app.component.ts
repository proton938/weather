import { Component, OnInit} from '@angular/core';
import { HttpService} from './models/http.service';
import { ApiParams } from './models/ApiParams';
import { WeatherParams } from './models/interfaces';

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
  	providers: [HttpService]
})

export class AppComponent implements OnInit {

	title = 'Сервис погоды';

	apiParams: ApiParams = new ApiParams();
	weatherArray: WeatherParams;
 
    constructor(private httpService: HttpService){}
      
    ngOnInit(){
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
}



