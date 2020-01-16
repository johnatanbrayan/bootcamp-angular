import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-data-binding',
    templateUrl: './data-binding.component.html'
})
export class DataBindingComponent implements OnInit{
    myDateValue: Date;

    ngOnInit() {
        this.myDateValue = new Date();
    }

    onDateChange(newDate: Date) {
        console.log(newDate);
    }
}