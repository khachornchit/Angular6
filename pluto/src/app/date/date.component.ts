import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

    date: string;

    constructor() {
        setInterval(() => {
            let currentDate = new Date();
            this.date = 'Today : ' + currentDate.toDateString() + ' , Locale Time : ' + currentDate.toLocaleTimeString();
        }, 1000);
    }

    ngOnInit() {
    }

    Sum(a: number, b: number) {
        return a + b;
    }

}