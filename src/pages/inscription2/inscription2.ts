import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { NavController, ToastController, AlertController} from 'ionic-angular';
import { ConnexionPage } from "../connexion/connexion";
import { HomePage } from "../home/home";
import { InscriptionPage3 } from "../inscription3/inscription3";

import { Customer } from "../../entities/customer";

@Component({
  selector: 'page-inscription2',
  templateUrl: 'inscription2.html'
})
export class InscriptionPage2 {

  customer = new Customer();
  passwordCheck: string;
  submitted = false;

  onSubmit() {
    this.customer = this.subscriptionForm.value;
    this.navCtrl.push(InscriptionPage3);
    
  
    
  }

  subscriptionForm: FormGroup;
  constructor(private fb: FormBuilder, private navCtrl: NavController, private alertCtrl: AlertController, public toastCtrl: ToastController) { }

  ngOnInit(): void {
    this.buildForm();
  }

  saveNAdd() {
    this.subscriptionForm.reset();
    let alert = this.alertCtrl.create({
      title: "Véhicule ajouté",
      buttons: ['OK']
    });
    alert.present();

  }

  buildForm(): void {
    this.subscriptionForm = this.fb.group({
      'username': [this.customer.username, [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(32)
        ]
      ],
      'password': [this.customer.password, [
          Validators.required,
          Validators.minLength(8)
        ]  
      ],
      'passwordCheck': [this.passwordCheck, [
          Validators.required
        ]
      ],
      'email': [this.customer.email, Validators.required],
      'mobilePhone': [this.customer.mobilePhone, Validators.required],
      'firstname': [this.customer.firstname],
      'lastname': [this.customer.lastname],
      'address': [this.customer.address],
      'city': [this.customer.city],
      'zipCode': [this.customer.zipCode],
      'phone': [this.customer.phone],
      'birthdate': [this.customer.birthdate]

    });

    this.subscriptionForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.subscriptionForm) { return; }
    const form = this.subscriptionForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      } 
    }
  }

  formErrors = {
    'username': '',
    'password': '',
    'passwordCheck': '',
    'email': '',
    'mobilePhone': ''
  };

  validationMessages = {
    'username': {
      'required':      "Champ requis.",
      'minlength':     "Au moins 6 caractères.",
      'maxlength':     "Pas plus de 32 caractères"
    },
    'password': {
      'required': 'Ce champ est requis.',
      'minlength': 'Au moins 8 caractères.'
    },
    'passwordCheck': {
      'required': 'Champ requis',
    },
    'email': {
      'required': "Champ requis"
    },
    'mobilePhone': {
      'required': "Champ requis." 
    }
  };
}

