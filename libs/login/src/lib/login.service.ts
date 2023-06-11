import { Injectable } from "@angular/core";
import {
  CognitoService,
  IUser,
} from "libs/core/src/lib/cognito/cognito.service";
import { AuthService } from "libs/auth/src/lib/auth.service";
import { Observable, tap } from "rxjs";
import { CognitoUser } from "amazon-cognito-identity-js";

@Injectable()
export class LoginService {
  constructor(
    private cognitoService: CognitoService,
    private authService: AuthService
  ) {}

  public signIn(user: IUser): Observable<CognitoUser> {
    return this.cognitoService.signIn(user).pipe(
      tap(response => {
        this.authService.logIn(response);
      })
    );
  }

  public signUp(user: {
    name: string;
    email: string;
    password: string;
  }): Observable<CognitoUser> {
    return this.cognitoService.signUp(user);
  }

  public confirmSignUp(confirmationData: {
    name: string;
    code: string;
  }): Observable<CognitoUser> {
    return this.cognitoService.confirmSignUp(confirmationData);
  }
}
