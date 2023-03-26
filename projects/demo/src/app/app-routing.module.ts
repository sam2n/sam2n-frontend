import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { StartComponent } from "./start/start.component";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "start",
      },
      {
        path: "start",
        component: StartComponent,
      },
      {
        path: "login",
        loadChildren: () =>
          import("./../.././../../libs/login/src/lib/login.module").then(
            m => m.LoginModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
