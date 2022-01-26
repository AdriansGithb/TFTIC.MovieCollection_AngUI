import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { F_Register } from 'src/app/forms/register.form';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/services/session.service';
import { checkPassRepetition } from 'src/app/validators/repeatPass.validator';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup = new FormGroup(F_Register, checkPassRepetition);
  msg!: string;
  returnUrl!: string;
  user!: User;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authServ: AuthService,
    private sessionServ: SessionService
  ) {
  }

  ngOnInit(): void {
    this.returnUrl = '/home';
    this.sessionServ.closeSession();
  }

  registering() {
    if (this.regForm.invalid) {
      this.msg = "invalid form sent";
      return;
    }
    else {
      this.authServ.register(this.regForm)
      .subscribe({
        next : (b) => {alert("utilisateur enregistré");this.router.navigate(['/sign']);}, 
        error : (e) => console.error(e), 
        complete : () => {},
      });
    }
  }


}
