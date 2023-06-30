import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, map, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidatorService implements AsyncValidator {

    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        const email = control.value;

        const httpCallObservable = new Observable<ValidationErrors|null>((subscriber) => {
            console.log(email);
            if(email === 'heider@gmail.com'){
                subscriber.next({emailTaken: true});
                subscriber.complete();
            }

            subscriber.next(null);
            subscriber.complete();
        }).pipe(
            delay(2000)
        )

        return httpCallObservable;
        
    }

    

    // validate(control: AbstractControl): Observable<ValidationErrors | null> {
    //     const email = control.value;
    //     console.log(email);

    //     return of({
    //         emailTaken: true
    //     }).pipe(
    //         delay(2000)
    //     );
    // }

    
    

}

// return this.http.get<any[]>(`https://reqres.in/api/users?email=${email}`).pipe(
//             // delay(2000),
//             map(resp => {
//                 return(resp.length === 0) ? null : { emailTaken: true };
//             })
//         )