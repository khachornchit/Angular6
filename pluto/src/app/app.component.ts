import {Component} from '@angular/core';
import {User} from './address-card/user.model';

function logMember(target, name, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log("Arguments", args, " were passed in this function");
        const result = original.apply(this, args);
        console.log("The result of the function is ", result)
        return result;
    };

    return descriptor;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'Pluto Solutions Angular 6';
    user: User;
    name: string = "Initial value";

    constructor() {
        console.log("Start app with a Simple Method " + this.aSimpleMethod(5, 6));

        this.user = new User();
        this.user.name = "Company 1";
        this.user.title = "Software Engineer";
        this.user.address = "Amphur Sansai, Chiang Mai, Thailand 50210";
        this.user.phones = [
            '+66 81 343 3982',
            '+66 81 677 9999'
        ];
    }

    @logMember
    aSimpleMethod(a, b) {
        return a * b;
    }
}
