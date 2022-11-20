import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { PlanetComponent } from './planet/planet.component';
import { YodaDetailComponent } from './yoda-detail/yoda-detail.component';
import { SpeciesComponent } from './species/species.component';
import { FilmsComponent } from './films/films.component';
import { StarshipComponent } from './starship/starship.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { SpeciesDetailComponent } from './species-detail/species-detail.component';
import { FilmsDetailComponent } from './films-detail/films-detail.component';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';
import { VehicledetailComponent } from './vehicledetail/vehicledetail.component';
const routes: Routes = [
  { path: '', component: HomeComponent },

  // { path: 'yoda' , component:YodaDetailComponent},
  // { path: 'planetdetail', component: PlanetDetailComponent },
  // { path: 'speciesdetail', component: SpeciesDetailComponent },
  // { path: 'filmdetail', component: FilmsDetailComponent },
  // { path: 'starshipdetail', component: StarshipDetailComponent },
  // { path: 'vehicledetail', component: VehicledetailComponent },

  {
    path: 'planet',
    component: PlanetComponent,
    children: [
      { path: 'planet', component: PlanetComponent },
      { path: 'planetdetail', component: PlanetDetailComponent },
    ],
  },

  {
    path: 'species',
    component: SpeciesComponent,
    children: [
      { path: 'species', component: SpeciesComponent },
      { path: 'speciesdetail', component: SpeciesDetailComponent },
    ],
  },
  {
    path: 'films',
    component: FilmsComponent,
    children: [
      {
        path: 'films',
        component: FilmsComponent,
      },
      {
        path: 'filmdetail',
        component: FilmsDetailComponent,
      },
    ],
  },
  {
    path: 'starship',
    component: StarshipComponent,
    children: [
      {
        path: 'starship',
        component: StarshipComponent,
      },
      {
        path: 'starshipdetail',
        component: StarshipDetailComponent,
      },
    ],
  },
  {
    path: 'vehicle',
    component: VehicleComponent,
    children: [
      {
        path: 'vehicle',
        component: VehicleComponent,
      },
      {
        path: 'vehicledetail',
        component: VehicledetailComponent,
      },
    ],
  },

  {
    path: 'characters',
    component: CharactersComponent,
    children: [
      { path: 'characters', component: CharactersComponent },

      { path: 'yoda', component: YodaDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
