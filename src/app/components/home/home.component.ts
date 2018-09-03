
// CORE
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// REUDUX
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { Observable } from 'rxjs';
import { CitiesState } from './../../store/reducers/cities.reducer';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'wta-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  // Array for template.
  private cities$: Observable<CitiesState> = this._store.select('cities');

  constructor(private _store: Store<AppState>) { }


}
