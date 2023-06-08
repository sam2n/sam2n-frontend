import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { StartComponent } from "./start/start.component";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";

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
        path: "auth",
        loadChildren: () =>
          import("./../.././../../libs/login/src/lib/login.module").then(
            m => m.LoginModule
          ),
      },
      {
        path: "dashboard",
        component: DashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
