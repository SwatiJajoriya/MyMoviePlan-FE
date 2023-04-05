import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { AddLanguageComponent } from './add-language/add-language.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { PaymentComponent } from './payment/payment.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminPortalComponent,
    AdminDashboardComponent,
    AdminNavbarComponent,
    AddMovieComponent,
    AddGenreComponent,
    AddLanguageComponent,
    EditMovieComponent,
    UserNavbarComponent,
    UserPortalComponent,
    UserDashboardComponent,
    UserRegistrationComponent,
    PaymentComponent,
    BookTicketComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
