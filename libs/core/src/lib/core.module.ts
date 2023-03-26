import { ErrorHandler, NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSelectModule } from "@angular/material/select";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { AppErrorHandler } from "./error-handler/app-error-handler.service";
import { HttpErrorInterceptor } from "./http-interceptors/http-error.interceptor";

@NgModule({
  declarations: [],
  imports: [
    // angular
    CommonModule,
    HttpClientModule,
    FormsModule,

    // material
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatButtonModule,
  ],
  exports: [
    // angular
    FormsModule,

    // material
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatButtonModule,
  ],
  providers: [
    // core error handlers
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error("CoreModule is already loaded. Import only in AppModule");
    }
  }
}
