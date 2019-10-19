import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SingUpComponent } from './user/sing-up/sing-up.component';
import { SingInComponent } from './user/sing-in/sing-in.component';

export const appRoutes : Routes = [
    {path : 'home', component : HomeComponent},
    {
        path : 'signup', component : UserComponent,
        children : [{path : '', component : SingUpComponent}]
    },
    {
        path : 'login', component : UserComponent,
        children : [{path : '', component : SingInComponent}]
    },
    {path : '', redirectTo:'/login', pathMatch : 'full'}
];