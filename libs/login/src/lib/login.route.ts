import { Route } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ConfirmSignupComponent } from "./confirm-signup/confirm-signup.component";

export const LOGIN_ROUTE: Route = {
  path: "",
  children: [
    {
      path: "",
      pathMatch: "full",
      redirectTo: "login",
    },
    {
      path: "login",
      component: LoginComponent,
      data: {
        pageTitle: "login.title",
      },
    },
    {
      path: "signup",
      component: SignupComponent,
      data: {
        pageTitle: "signup.title",
      },
    },
    {
      path: "confirm-signup",
      component: ConfirmSignupComponent,
      data: {
        pageTitle: "confirm-signup.title",
      },
    },
  ],
};
