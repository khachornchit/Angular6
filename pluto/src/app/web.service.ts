import {Injectable} from '@angular/core';
import {User} from "./address-card/user.model";

@Injectable({
    providedIn: 'root'
})
export class WebService {

    writeToConsole(arg) {
        console.log(arg);
    }

    start() {
        console.log('Start web service!');
    }

    getTestUser() {
        let user = new User();
        user.name = "Pluto Solutions";
        user.title = "Software Engineer";
        user.address = "Amphur Sansai, Chiang Mai, Thailand 50210";
        user.phones = [
            '+66 81 343 3982',
            '+66 81 677 9999'
        ];

        return user;
    }

    constructor() {
        this.start();
    }
}