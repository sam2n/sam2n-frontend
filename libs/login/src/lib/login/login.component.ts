import { Component } from "@angular/core";
import { LoginService } from "../login.service";
import { Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { IUser } from "libs/core/src/lib/cognito/cognito.service";

@Component({
  selector: "lib-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  loading: boolean;
  isConfirm: boolean;
  form = new FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
  }>({
    email: new FormControl<string | null>(""),
    password: new FormControl<string | null>(""),
  });

  constructor(private router: Router, private loginService: LoginService) {
    this.loading = false;
    this.isConfirm = false;
  }

  public signIn(): void {
    this.loading = true;
    if (this.form.invalid) return;
    this.loginService.signIn(this.form.value as IUser).subscribe({
      next: () => this.router.navigate(["/dashboard"]),
      error: err => {
        this.loading = false;
      },
    });
  }
}
