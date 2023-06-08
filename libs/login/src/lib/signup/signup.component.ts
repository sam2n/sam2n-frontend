import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../login.service";

@Component({
  selector: "lib-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent {
  loading: boolean;
  isConfirm: boolean;
  form = new FormGroup<{
    name: FormControl<string>;
    email: FormControl<string>;
    password: FormControl<string>;
  }>({
    name: new FormControl<string>("", { initialValueIsDefault: true }),
    email: new FormControl<string>("", { initialValueIsDefault: true }),
    password: new FormControl<string>("", { initialValueIsDefault: true }),
  });

  constructor(private router: Router, private loginService: LoginService) {
    this.loading = false;
    this.isConfirm = false;
  }

  public submit(): void {
    this.loading = true;
    if (this.form.invalid) return;
    this.loginService.signUp(this.form.getRawValue()).subscribe({
      next: () =>
        this.router.navigate(["/auth/confirm-signup"], {
          queryParams: { email: this.form.getRawValue().name },
        }),
      error: err => {
        this.loading = false;
      },
    });
  }
}
