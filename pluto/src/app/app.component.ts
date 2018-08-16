import {Component} from '@angular/core';
import {User} from './address-card/user.model';
import {WebService} from "./web.service";
import {HttpClient} from "@angular/common/http";

export function logMember(target, name, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log("Arguments", args, " were passed in this function");
        const result = original.apply(this, args);
        console.log("The result of the function is ", result);
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

    constructor(private service: WebService, private http: HttpClient) {
        this.user = this.service.getTestUser();
    }

    ngOnInit() {
        let obs = this.http.get('https://api.github.com/users/plutosolutions');
        obs.subscribe((response)=>console.log(response));
    }

    @logMember
    multiply(a, b) {
        return a * b;
    }
}