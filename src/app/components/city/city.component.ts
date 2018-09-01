import { WhistoricalModel } from './../../utils/models/Whistorical.model';
import { AppState } from './../../store/index';
import { Store } from '@ngrx/store';
import { Utils, citiesCode } from './../../utils/utils';
import { WcityModel } from './../../utils/models/Wcity.model';
import { Component, OnInit, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader/component-loader.factory';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { Observable } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'wta-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  providers: [BsModalService, ComponentLoaderFactory, PositioningService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityComponent implements OnInit {
  private utils: Utils = new Utils();
  private citiesCode = citiesCode;
  public activeHistoryCity: WhistoricalModel[];
  public activeHistoryCityID: Number;

  private historical$: Observable<any>;
  private historical: WhistoricalModel[];

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private _store: Store<AppState>) {
    this.historical$ = this._store.select('historical');
   }
  @Input('city') city: WcityModel;

  ngOnInit() {
    this.historical$.subscribe((historicalArr: WhistoricalModel[]) => this.historical = historicalArr);
  }

  private openModal(template: TemplateRef<any>, cityId: number) {
    this.prepareactiveHistoryCity(cityId);
    this.modalRef = this.modalService.show(template);
  }

  public prepareactiveHistoryCity(cityId: Number) {
    this.activeHistoryCity  = this.historical.filter((historicalCity: WhistoricalModel) =>  historicalCity.id === cityId);
    this.activeHistoryCityID = cityId;
  }
}
