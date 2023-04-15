import { ItemComponent } from './item/item.component';
import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
      { path: "login", component:LoginPageComponent,pathMatch: "full" },
      { path: "home", component:HomeComponent },
      { path: "register", component: RegisterComponent },
      { path: "item", component: ItemComponent },
      { path: "cart", component: ItemComponent },
      { path: "item/:id", component: ItemComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
