import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { LoginService } from "../login.service";

@Component({
  selector: "lib-confirm-signup",
  templateUrl: "./confirm-signup.component.html",
  styleUrls: ["./confirm-signup.component.scss"],
})
export class ConfirmSignupComponent {
  loading: boolean;
  form = new FormGroup<{
    code: FormControl<string>;
  }>({
    code: new FormControl<string>("", { initialValueIsDefault: true }),
  });
  email: string;
  name: string;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private activatedRout: ActivatedRoute
  ) {
    this.loading = false;
    this.email = activatedRout.snapshot.queryParams["email"];
    this.name = activatedRout.snapshot.queryParams["name"];
  }

  public submit(): void {
    this.loading = true;
    if (this.form.invalid) return;
    this.loginService
      .confirmSignUp({ code: this.form.getRawValue().code, name: this.name })
      .subscribe({
        next: () => this.router.navigate(["/auth/login"]),
        error: err => {
          this.loading = false;
        },
      });
  }
}
