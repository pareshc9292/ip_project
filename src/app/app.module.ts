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
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    CardsComponent,
    ProdectCategoryComponent,
    RegisterComponent,
    LoginPageComponent,
    FooterComponent,
    ItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    NgbModule,
    MatButtonToggleModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatFormFieldModule,
    HttpClientModule,
    NgbRating,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
