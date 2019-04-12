import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthenticationService} from "./service/auth.service";
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddPersonaComponent } from './add-persona/add-persona.component';
import { ListPersonaComponent } from './list-persona/list-persona.component';
import {PersonaService} from "./service/persona.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './material/material.module';

import {MatPaginatorModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddPersonaComponent,
    ListPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    MatPaginatorModule
  ],
  exports: [
    MatPaginatorModule
  ],
  providers: [AuthenticationService, PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
