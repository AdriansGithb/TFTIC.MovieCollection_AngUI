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

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IsUserGuard } from './guards/is-user.guard';
import { IsAdminGuard } from './guards/is-admin.guard';
import { RegisterComponent } from './components/register/register.component';
import { IsAnonymousGuard } from './guards/is-anonymous.guard';
import { AdministrationRoutingModule } from './pages/administration/administration-routing.module';
import { TokenInterceptorInterceptor } from './interceptors/token-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SignComponent,
    HomeComponent,
    LoggeduserAccessComponent,
    LoggedadminAccessComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdministrationRoutingModule
  ],
  providers: [IsUserGuard, IsAdminGuard, IsAnonymousGuard, { provide : HTTP_INTERCEPTORS, useClass : TokenInterceptorInterceptor, multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
