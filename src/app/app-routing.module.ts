import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { SignComponent } from './components/sign/sign.component';
import { IsAdminGuard } from './guards/is-admin.guard';
import { IsAnonymousGuard } from './guards/is-anonymous.guard';
import { IsUserGuard } from './guards/is-user.guard';
import { LoggedadminAccessComponent } from './pages/loggedadmin-access/loggedadmin-access.component';
import { LoggeduserAccessComponent } from './pages/loggeduser-access/loggeduser-access.component';

const routes: Routes = [
  { path: '', redirectTo : 'home', pathMatch : 'full' },
  { path: 'home', component : HomeComponent },
  { path: 'sign', component : SignComponent },
  { path: 'register', component : RegisterComponent, canActivate:[IsAnonymousGuard]  },
  { path: 'useraccess', component : LoggeduserAccessComponent, canActivate : [IsUserGuard]  },
  { path: 'adminaccess', component : LoggedadminAccessComponent, canActivate : [IsAdminGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
