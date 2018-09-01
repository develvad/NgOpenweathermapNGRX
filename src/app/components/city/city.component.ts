import { WcityModel } from './../../utils/models/Wcity.model';
import { Component, OnInit, OnChanges, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'wta-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityComponent implements OnInit, OnChanges {

  constructor() { }
  @Input('city') city: WcityModel;

  ngOnInit() {
  }

  ngOnChanges() {

  }

}
