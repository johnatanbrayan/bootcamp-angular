import { Component, OnInit } from "@angular/core";
import { getFullYear } from 'ngx-bootstrap/chronos/public_api';

@Component({
    selector: 'app-data-binding',
    templateUrl: './data-binding.component.html'
})
export class DataBindingComponent implements OnInit{
    myDateValue: Date;

    ngOnInit() {
        this.myDateValue = new Date();
        console.log(this.myDateValue);
    }

    onDateChange(newDate: Date) {
        console.log(newDate);
        
    }
}