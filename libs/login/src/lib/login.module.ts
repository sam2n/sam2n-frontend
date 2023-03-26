import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RouterModule } from "@angular/router";
import { LOGIN_ROUTE } from "./login.route";
import { SharedModule } from "../../../../projects/demo/src/app/shared/shared.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule, RouterModule.forChild([LOGIN_ROUTE])],
  exports: [LoginComponent],
})
export class LoginModule {}
