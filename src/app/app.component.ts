import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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

	constructor(private httpService: HttpService, private router: Router) { }

	ngOnInit(){
	}



}



