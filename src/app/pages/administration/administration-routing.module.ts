import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAdminGuard } from 'src/app/guards/is-admin.guard';
import { AdministrationComponent } from './administration.component';
import { AudiencesComponent } from './audiences/audiences.component';
import { CountriesComponent } from './countries/countries.component';

const routes: Routes = [
  { path: 'administration', component: AdministrationComponent, children : [
    { path : 'countries', component : CountriesComponent},
    { path : 'audiences', component : AudiencesComponent},
   ], canActivate : [IsAdminGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
