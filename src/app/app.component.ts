import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import materialbutton from '@angular/material/button';


interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
})
export class AppComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getForecasts();
  }

  getForecasts() {
    // this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
    //   (result) => {
    //     this.forecasts = result;
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );
  }
  playRadio() {
    window.open('http://localhost:4209/radio', '_blank', 'location=yes,height=720,width=520,scrollbars=no,status=yes');
  }

  title = 'slušaj radio';
}
