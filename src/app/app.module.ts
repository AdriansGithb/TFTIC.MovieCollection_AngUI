import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignComponent } from './components/sign/sign.component';
import { HomeComponent } from './components/home/home.component';
import { LoggeduserAccessComponent } from './pages/loggeduser-access/loggeduser-access.component';
import { LoggedadminAccessComponent } from './pages/loggedadmin-access/loggedadmin-access.component';

import { HttpClientModule } from '@angular/common/http';
import { IsUserGuard } from './guards/is-user.guard';
import { IsAdminGuard } from './guards/is-admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SignComponent,
    HomeComponent,
    LoggeduserAccessComponent,
    LoggedadminAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [IsUserGuard, IsAdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
