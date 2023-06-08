import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RouterModule } from "@angular/router";
import { LOGIN_ROUTE } from "./login.route";
import { SharedModule } from "../../../../projects/demo/src/app/shared/shared.module";
import { LoginService } from "./login.service";
import { SignupComponent } from "./signup/signup.component";
import { ConfirmSignupComponent } from "./confirm-signup/confirm-signup.component";

@NgModule({
  declarations: [LoginComponent, SignupComponent, ConfirmSignupComponent],
  imports: [SharedModule, RouterModule.forChild([LOGIN_ROUTE])],
  exports: [LoginComponent],
  providers: [LoginService],
})
export class LoginModule {}
