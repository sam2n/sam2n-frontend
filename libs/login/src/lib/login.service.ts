import { Injectable } from "@angular/core";
import {
  CognitoService,
  IUser,
} from "libs/core/src/lib/cognito/cognito.service";
import { Observable } from "rxjs";
import { CognitoUser } from "amazon-cognito-identity-js";

@Injectable()
export class LoginService {
  constructor(private cognitoService: CognitoService) {}

  public signIn(user: IUser): Observable<CognitoUser> {
    return this.cognitoService.signIn(user);
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
