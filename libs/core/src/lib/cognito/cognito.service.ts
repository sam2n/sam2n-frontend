import { Injectable } from "@angular/core";
import { BehaviorSubject, from, Observable } from "rxjs";
import { environment } from "../../../../../projects/demo/src/environments/environment";
import { Amplify, Auth } from "aws-amplify";
import { tap } from "rxjs/operators";
import { CognitoUser } from "amazon-cognito-identity-js";

export interface IUser {
  email: string;
  password: string;
  showPassword: boolean;
  code: string;
  name: string;
}

@Injectable({
  providedIn: "root",
})
export class CognitoService {
  private authenticationSubject: BehaviorSubject<any>;

  constructor() {
    Amplify.configure({
      Auth: environment.cognito,
    });

    this.authenticationSubject = new BehaviorSubject<boolean>(false);
  }

  public signUp(user: {
    name: string;
    email: string;
    password: string;
  }): Observable<any> {
    return from(
      Auth.signUp({
        username: user.name,
        password: user.password,
        attributes: {
          email: user.email,
          // for wrong settings Cognita wait this parm
          picture: undefined,
        },
      })
    );
  }

  public confirmSignUp(user: {
    name: string;
    code: string;
  }): Observable<CognitoUser> {
    return from(Auth.confirmSignUp(user.name, user.code));
  }

  public requestCode(user: { email: string }): Observable<CognitoUser> {
    return from(Auth.resendSignUp(user.email));
  }

  public signIn(user: {
    email: string;
    password: string;
  }): Observable<CognitoUser> {
    return from(Auth.signIn(user.email, user.password)).pipe(
      tap(() => this.authenticationSubject.next(true))
    );
  }

  public signOut(): Promise<any> {
    return Auth.signOut().then(() => {
      this.authenticationSubject.next(false);
    });
  }

  public isAuthenticated(): Promise<boolean> {
    if (this.authenticationSubject.value) {
      return Promise.resolve(true);
    } else {
      return this.getUser()
        .then((user: any) => {
          if (user) {
            return true;
          } else {
            return false;
          }
        })
        .catch(() => {
          return false;
        });
    }
  }

  public getUser(): Promise<any> {
    return Auth.currentUserInfo();
  }

  public updateUser(user: IUser): Promise<any> {
    return Auth.currentUserPoolUser().then((cognitoUser: any) => {
      return Auth.updateUserAttributes(cognitoUser, user);
    });
  }
}
