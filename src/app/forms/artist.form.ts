import { FormControl, Validators } from "@angular/forms";


export const F_Artist = {
    idArtist : new FormControl(null),
    name : new FormControl('', [Validators.required, Validators.maxLength(50)]),
    firstName : new FormControl('', [Validators.required, Validators.maxLength(50)]),
    birthDate : new FormControl(null)
}