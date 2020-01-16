import { DataBindingComponent } from './data-binding.component';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule, 
        BsDatepickerModule.forRoot(),
        DatepickerModule.forRoot() 
      ],
      declarations: [ DataBindingComponent ],
      bootstrap:    [ DataBindingComponent ]
})
export class DataBindingModule {}