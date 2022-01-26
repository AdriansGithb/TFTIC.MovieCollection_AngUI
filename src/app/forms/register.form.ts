import { FormControl, Validators } from "@angular/forms";


export const F_Register = {
    usermail : new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]),
    name : new FormControl('', [Validators.required, Validators.maxLength(50)]),
    password : new FormControl('', [Validators.required, Validators.maxLength(50)]),
    repeatedPassword : new FormControl('', [Validators.required, Validators.maxLength(50)])
}
