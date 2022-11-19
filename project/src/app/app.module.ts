import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CharactersComponent } from './characters/characters.component';
import { YodaDetailComponent } from './yoda-detail/yoda-detail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { CachepipePipe } from './cachepipe.pipe';
import { CacheApiService } from './cache-api.service';
import { CacheInterceptor } from './cache.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataserviceService } from './dataservice.service';
import { PlanetComponent } from './planet/planet.component';
import { SpeciesComponent } from './species/species.component';
import { FilmsComponent } from './films/films.component';
import { StarshipComponent } from './starship/starship.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { SpeciesDetailComponent } from './species-detail/species-detail.component';
import { FilmsDetailComponent } from './films-detail/films-detail.component';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';
import { VehicledetailComponent } from './vehicledetail/vehicledetail.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CharactersComponent,
    YodaDetailComponent,
    NavBarComponent,
    CachepipePipe,
    PlanetComponent,
    SpeciesComponent,
    FilmsComponent,
    StarshipComponent,
    VehicleComponent,
    PlanetDetailComponent,
    SpeciesDetailComponent,
    FilmsDetailComponent,
    StarshipDetailComponent,
    VehicledetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  
  ],
  providers: [
    DataserviceService,
    CacheApiService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass : CacheInterceptor,
      multi : true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
