import { CursosService } from './cursos/cursos.service';
import { CursosComponent } from './cursos/cursos.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
