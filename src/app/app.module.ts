import { CitiesEffects } from './store/effects/cities.effects';
import { routes } from './router-app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { CityComponent } from './components/city/city.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/template/header/header.component';
import { FooterComponent } from './shared/template/footer/footer.component';
import { CapitalizePipe } from './utils/pipes/capitalize.pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CityComponent,
    HeaderComponent,
    FooterComponent,
    CapitalizePipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([CitiesEffects]),
    HttpClientModule,
    ModalModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
