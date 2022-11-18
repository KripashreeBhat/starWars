import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { YodaDetailComponent } from './yoda-detail/yoda-detail.component';
const routes: Routes = [
  { path : '', component: HomeComponent},
  { path: 'yoda' , component:YodaDetailComponent},
  { path: 'characters' ,component:CharactersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
