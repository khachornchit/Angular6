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
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingProfileComponent } from './setting-profile/setting-profile.component';
import { SettingContactComponent } from './setting-contact/setting-contact.component';

@NgModule({
    declarations: [
        AppComponent,
        GreetingComponent,
        DateComponent,
        AddressCardComponent,
        HomeComponent,
        SettingComponent,
        PageNotFoundComponent,
        SettingProfileComponent,
        SettingContactComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
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