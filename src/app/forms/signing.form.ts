import { FormControl, Validators } from "@angular/forms";

export const F_Signing = {
        usermail : new FormControl('', Validators.required),
        password : new FormControl('', Validators.required)
}