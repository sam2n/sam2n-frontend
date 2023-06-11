import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AppConfigurationService } from "../app-config/app-configuration.service";
import { LocalStorageService } from "../local-storage/local-storage.service";

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
  public headerName = "Authorization";
  public authScheme = "Bearer";

  constructor(
    private appConfigurationService: AppConfigurationService,
    private localStorageService: LocalStorageService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const serverApiUrl = this.appConfigurationService.getEndpointFor("");
    if (
      !request.url ||
      (request.url.startsWith("http") &&
        !(serverApiUrl && request.url.startsWith(serverApiUrl)))
    ) {
      return next.handle(request);
    }
    const token: string | null = this.localStorageService.getItem(
      "authenticationToken"
    );
    if (token) {
      {
        request = request.clone({
          setHeaders: {
            Authorization: `${this.authScheme} ${token}`,
          },
        });
      }
    }
    return next.handle(request);
  }
}
