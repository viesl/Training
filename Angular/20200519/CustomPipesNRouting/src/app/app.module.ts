import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SentencesComponent } from './sentences/sentences.component';
import { ExponentialComponent } from './exponential/exponential.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NumberOfLettersPipe } from './pipes/number-of-letters.pipe';
import { FormsModule } from '@angular/forms';
import { ExponentPipe } from './pipes/exponent.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SentencesComponent,
    ExponentialComponent,
    NumberOfLettersPipe,
    ExponentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
