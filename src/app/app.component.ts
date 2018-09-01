import { CitiesService } from './utils/services/cities.service';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _cities: CitiesService) {
    // Inicialize APP
    // this._cities.getCitiesFromService();
    // Set Interval to 30 segs the refresh of store
    // setInterval(this._cities.getCitiesFromService, 2000);
    this._cities.initApp();

  }
}
