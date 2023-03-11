import { AppComponent } from './app.component';
import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: "home", redirectTo: "/home", pathMatch: "full" },
  
      { path: "login", component:LoginPageComponent,pathMatch: "full" },
      { path: "register", component: RegisterComponent },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
