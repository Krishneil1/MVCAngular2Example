﻿import { NgModule, ApplicationRef, Component, ErrorHandler, enableProdMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Location, LocationStrategy, HashLocationStrategy } from "@angular/common";
import { routing } from "./routes/app.routing";
import { AppComponent } from "./app.component";
import { DefaultComponent } from "./components/default";
import { ProfileComponent } from "./components/profile";
import { UserComponent } from "./components/user";
import { OrderByPipe } from "./pipe/orderBy";

enableProdMode();

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        routing
    ],
    declarations: [
        AppComponent,
        DefaultComponent,
        ProfileComponent,
        UserComponent,
        OrderByPipe,
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }