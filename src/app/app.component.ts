import { CitiesService } from './utils/services/cities.service';
import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store';
import { GetAllCitiesAction } from './store/actions/cities.actions';
import { Subscription, timer, pipe, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app';
  private subscription: Subscription;
  constructor(private _store: Store<AppState>) {
    // Inicialize APP
    this.subscription = timer(0, 30000)
      .subscribe(() => {
        this._store.dispatch(new GetAllCitiesAction());
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
