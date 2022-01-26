import { AbstractControl, ValidationErrors } from "@angular/forms";

export function checkPassRepetition(control : AbstractControl) : ValidationErrors | null{

    const password = control.value.password as string ;
    const rptdPass = control.value.repeatedPassword as string ;
    
    if( password === rptdPass )
        return null;

    return {
        'pass-repetition-error': 'Les 2 mots de passe doivent correspondre'
    }

}