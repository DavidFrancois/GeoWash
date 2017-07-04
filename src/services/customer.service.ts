import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


import { Customer } from '../entities/customer';
import { HttpService } from './http-request.service'; 

@Injectable()
export class CustomerService {

    private customerUrl = 'http://93.118.32.126:8088/customer';

    constructor (private httpService: HttpService) {}

    // getUser(): Observable<Customer> {
    //     return this.http.get(this.customerUrl + '/alexandre')
    //                     .map(this.extractData)
    //                     .catch(this.handleError);
    // }


    createCustomer(data) {
        this.httpService.post(this.customerUrl, data)
                        .subscribe(
                            customer => console.log('customer', customer),
                            error => console.log('error', error)
                        );
    }
}