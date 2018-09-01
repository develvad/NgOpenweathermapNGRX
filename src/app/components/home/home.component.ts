
// CORE
import { Component, OnInit } from '@angular/core';
// REUDUX
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { Observable } from 'rxjs';
import { WcityModel } from '../../utils/models/Wcity.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'wta-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private cities$: Observable<WcityModel[]>;
  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this.cities$ = this._store.select('cities');
  }

}
