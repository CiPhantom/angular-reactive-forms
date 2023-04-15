import { AbstractControl, ValidationErrors } from "@angular/forms";
import { SubscriptionService } from "../service/http/subscription.service";
import { Observable } from "rxjs";

export class SubscriptionFormValidators {
    constructor(private subscriptionService : SubscriptionService) {}
    
//     static loginShouldBeUnique(control: AbstractControl) : Observable<ValidationErrors | null> {
//         return this.subscriptionService.
//     }
}