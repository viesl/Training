import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MatTableModule } from "@angular/material/table";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UrlDetailsComponent } from './Features/url-details/url-details.component';
import { MaterialModule } from './Features/material/material.module';
import { HomeComponent } from './Features/home/home.component';
import { AboutUsComponent } from './Features/about-us/about-us.component';

import { RegisterComponent } from './Features/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ModalFormComponent } from './modal-form/modal-form.component';
@NgModule({
  declarations: [
    AppComponent,
    UrlDetailsComponent,
    HomeComponent,
    AboutUsComponent,

    RegisterComponent,

    MenuComponent,

    ModalFormComponent,

  ],
  entryComponents: [ModalFormComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatTableModule,
    MaterialModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
// Injectable
// Inject
// Injector
