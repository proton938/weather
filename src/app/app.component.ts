import { Component, OnInit} from '@angular/core';
import { HttpService} from './http.service';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HttpService]
})

export class AppComponent implements OnInit { 
   
 
    constructor(private httpService: HttpService){}
      
    ngOnInit(){
		
    }
	
	getWeather(): void {
		this.httpService.getData()
		.subscribe(
			result => {
				console.log(result);
				alert(JSON.stringify(result));
			}, error => {
				console.log(error);
				alert('Ресурс не обнаружен!');
			}
		);
	}
}
