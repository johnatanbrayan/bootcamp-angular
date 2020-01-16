import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CursosService } from './cursos/cursos.service';
import { CursosComponent } from './cursos/cursos.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// RECOMMENDED
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),

  ],
  providers: [CursosService],
  bootstrap: [AppComponent,DataBindingComponent]
})
export class AppModule { }