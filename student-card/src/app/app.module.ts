import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/Card/card.component';
import { FormComponent } from './components/Form/form.component';

@NgModule({
  declarations: [
    AppComponent , 
    CardComponent , 
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    ReactiveFormsModule , 
    FormsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
