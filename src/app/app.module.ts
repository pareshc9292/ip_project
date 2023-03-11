import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { SliderComponent } from './slider/slider.component';
import { CardsComponent } from './cards/cards.component';
import { ProdectCategoryComponent } from './prodect-category/prodect-category.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './auth/register/register.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    CardsComponent,
    ProdectCategoryComponent,
    RegisterComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
