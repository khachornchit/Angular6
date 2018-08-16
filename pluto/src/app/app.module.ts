import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {GreetingComponent} from './greeting/greeting.component';
import {DateComponent} from './date/date.component';
import {AddressCardComponent} from './address-card/address-card.component';
import {FormsModule} from "@angular/forms";
import {ViewModule} from "./view/view.module";
import {WebService} from "./web.service";
import {HttpClientModule} from "@angular/common/http";

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
        HttpClientModule,
        ViewModule
    ],
    providers: [
        WebService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}