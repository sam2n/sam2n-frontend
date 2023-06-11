import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LocalStorageService } from "libs/core/src/lib/local-storage/local-storage.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private loggedInSub = new BehaviorSubject(false);
  public loggedIn = this.loggedInSub.asObservable();

  constructor(private localStorageService: LocalStorageService) {}

  logIn(user: any) {
    if (user) {
      this.localStorageService.setItem(
        "authenticationToken",
        user.signInUserSession.accessToken.jwtToken
      );
      this.localStorageService.setItem(
        "authenticationRefreshToken",
        user.signInUserSession.refreshToken.token
      );
      this.loggedInSub.next(true);
    }
  }
}
