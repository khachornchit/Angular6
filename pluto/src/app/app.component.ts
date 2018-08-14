import {Component} from '@angular/core';
import {User} from './address-card/user.model';
import {WebService} from "./web.service";

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
        console.log("Start app with a Simple Method " + this.multiply(5, 6));

        let webService = new WebService();
        webService.writeToConsole("Hello, from web service");
        this.user = webService.getTestUser();
    }

    @logMember
    multiply(a, b) {
        return a * b;
    }
}
