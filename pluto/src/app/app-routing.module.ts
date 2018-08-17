import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SettingComponent} from "./setting/setting.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {SettingProfileComponent} from "./setting-profile/setting-profile.component";
import {SettingContactComponent} from "./setting-contact/setting-contact.component";

const routes: Routes = [
    // {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {
        path: 'setting',
        component: SettingComponent,
        children: [
            {path: '', redirectTo: 'profile', pathMatch: 'full'},
            {path: 'profile', component: SettingProfileComponent},
            {path: 'contact', component: SettingContactComponent},
            {path: '**', redirectTo: 'profile'},
        ]
    },
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}