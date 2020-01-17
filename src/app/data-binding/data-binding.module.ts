import { DataBindingComponent } from './data-binding.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";


@NgModule({
    imports: [ 
        BrowserModule, 
      ],
    declarations: [ DataBindingComponent ],
    bootstrap:    [ DataBindingComponent ]
})
export class DataBindingModule {}