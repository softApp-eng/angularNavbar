import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule , Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes : Routes = [
  {path : '' , component : HomeComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'navbar' , component : NavbarComponent},
  {path : 'services' , component : ServicesComponent},
  {path : 'about', component : AboutComponent},
  {path : '**',component : PageNotFoundComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule {

 }
export const routingComponents =[
  NavbarComponent,HomeComponent,AboutComponent,ServicesComponent,PageNotFoundComponent
]