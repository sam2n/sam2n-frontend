import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from "../../../../libs/core/src/lib/core.module";
import { StartComponent } from "./start/start.component";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { AuthModule } from "../../../../libs/auth/src/lib/auth.module";

@NgModule({
  declarations: [AppComponent, StartComponent, DashboardComponent],
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core
    CoreModule,
    AuthModule,

    // app
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
