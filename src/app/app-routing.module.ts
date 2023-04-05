import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { AddLanguageComponent } from './add-language/add-language.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { PaymentComponent } from './payment/payment.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path:'home',component:HomeComponent},
{path:'admin-portal', component:AdminPortalComponent},
{path:'admin-dashboard', component:AdminDashboardComponent},
{path:'admin-add-movie',component:AddMovieComponent},
{path:'admin-add-genre',component:AddGenreComponent},
{path:'admin-add-language',component:AddLanguageComponent},
{path:'editMovie/:id',component:EditMovieComponent},
{path:'user-portal', component:UserPortalComponent},
{path:'user-dashboard', component:UserDashboardComponent},
{path:'user-registration',component:UserRegistrationComponent},
{path:'payment',component:PaymentComponent},
{path:'ticket',component:BookTicketComponent},
{path:'contactus',component:ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
