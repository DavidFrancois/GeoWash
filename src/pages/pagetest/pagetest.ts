import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../../services/customer.service';



@Component({
  selector: 'page-pagetest',
  templateUrl: 'pagetest.html',
  providers: [CustomerService]
})
export class TestPage implements OnInit {
  private data = {
    name: "Alex",
    firstName: "Alexandre",
    username: "syntaxerrortest",
    email: "syntaxerrortest@gmail.com",
  	birthdate: "1996-05-04",
  	password: "azerty",
  	address:"lalala",
  	zip:"cscs",
  	city:"test",
    mobilePhoneNumber: "3",
    homePhoneNumber: "016362616098",
  	devicetype: "Web",
  	localisation: "data",
    type: "Client",
  	statut: "Actif"
  }

  constructor(private customerService: CustomerService) {}

  ngOnInit() { 
    // this.getCustomer();
    this.subscribe();
   }

  // getCustomer() {
  //   this.httpService.getCustomer()
  //                   .subscribe(
  //                   customer => {
  //                     console.log(customer, 'TESSST');
  //                     this.customer = customer;
  //                   }, error =>{
  //                     this.errorMsg = <any>error;
  //                     console.log(this.errorMsg, 'RAATTE');
  //                 });
  // }

  subscribe() {
    this.customerService.createCustomer(this.data);
                    // .subscribe(
                    //   customer => console.log('customer', customer),
                    //   error => console.log('error', error)
                    //   );
  }
} 
