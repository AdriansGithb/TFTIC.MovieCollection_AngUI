import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { F_Signing } from 'src/app/forms/signing.form';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  signForm: FormGroup = new FormGroup(F_Signing);
  msg!: string;
  returnUrl!: string;
  user!: User;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authServ: AuthService,
    private sessionServ : SessionService
  ) {
  }

  ngOnInit(): void {
    //this.signForm = this.formBuilder.group(F_Signing);
    this.signForm.setValue({ usermail: "user@test.com", password: "user" });
    this.returnUrl = '/home';
    this.sessionServ.closeSession();
  }

  signing() {
    if (this.signForm.invalid) {
      this.msg = "invalid form sent";
      return;
    }
    else {
      const { usermail, password } = this.signForm.value;
      this.authServ.login(usermail, password).subscribe({
        next: (user => this.user = user),
        error: (e) => console.error(e),
        complete: () => {
          if (this.user) {
            this.sessionServ.openSession(this.user);
            alert(`Bienvenue ${this.user.name}`);
            this.router.navigate([this.returnUrl]);
          };
        }
      });
      }
  }
}



