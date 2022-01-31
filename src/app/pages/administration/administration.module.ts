import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { CountriesComponent } from './countries/countries.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AudiencesComponent } from './audiences/audiences.component';
import { GenresComponent } from './genres/genres.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistsListComponent } from './artists/artists-list/artists-list.component';
import { ArtistsFormComponent } from './artists/artists-form/artists-form.component';


@NgModule({
  declarations: [
    AdministrationComponent,
    CountriesComponent,
    AudiencesComponent,
    GenresComponent,
    ArtistsComponent,
    ArtistsListComponent,
    ArtistsFormComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ArtistsListComponent,
    ArtistsFormComponent
  ]
})
export class AdministrationModule { }
