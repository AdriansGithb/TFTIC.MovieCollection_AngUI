import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { CountriesComponent } from './countries/countries.component';
import { FormsModule } from '@angular/forms';
import { AudiencesComponent } from './audiences/audiences.component';


@NgModule({
  declarations: [
    AdministrationComponent,
    CountriesComponent,
    AudiencesComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    FormsModule
  ]
})
export class AdministrationModule { }
