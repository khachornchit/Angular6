import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {GreetingComponent} from './greeting/greeting.component';
import {DateComponent} from './date/date.component';
import {AddressCardComponent} from './address-card/address-card.component';
import {FormsModule} from "@angular/forms";
import {ViewModule} from "./view/view.module";

@NgModule({
    declarations: [
        AppComponent,
        GreetingComponent,
        DateComponent,
        AddressCardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ViewModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}