import { Component, OnInit, Inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

//import { User } from './../shared/models/user.model';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css']
})
export class AddGuestComponent implements OnInit {

  //user: User;
  addGuestForm: FormGroup;
  fb: FormBuilder;

  constructor( @Inject(FormBuilder) fb: FormBuilder) {
    this.fb = fb;
  }

  suffixList: string[] = [
    'None',
    'Jr',
    'Sr',
    'II',
    'III',
    'Iv'
  ];
  //TODO: amit k - retrieve observable from service and use decorator to unsubscribe 
  militaryBranches: string[] = [
    'Not a Retiree',
    'Air National Guard',
    'Army National Guard',
    'US Air Force',
    'US Army',
    'US Marine Corps',
    'US Navy'
  ];

  ngOnInit() {
    this.createForm();

    //default retiredFromBranch to "Not a Retiree"
    //this.retiredFromBranch.setValue(this.militaryBranches[0]);
  }

  createForm() {
    this.addGuestForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      suffix: ['', Validators.required],
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode5: ['', Validators.required],
      zipCode4: [''],
      email: ['', Validators.required],
      homePhoneAreaCode: ['', Validators.required],
      homePhonePrefix: ['', Validators.required],
      homePhoneLineNumber: ['', Validators.required],
      cellPhoneAreaCode: ['', Validators.required],
      cellPhonePrefix: ['', Validators.required],
      cellPhoneLineNumber: ['', Validators.required],
      rankRate: ['', Validators.required],
      swiftBoats: ['', Validators.required],
      datesOfService: ['', Validators.required],
      corpsOneCuaViet: [''],
      corpsOneHue: [''],
      corpsOneDaNang: [''],
      corpsOneChuLai: [''],
      corpsTwoQuiNhon: [''],
      corpsTwoCamRanhBay: [''],
      corpsThreeCatLo: [''],
      corpsFourSeaFloat: [''],
      corpsFourNamCan: [''],
      corpsFourAnThoi: [''],
      retiredInMilitary: ['', Validators.required],
      retiredFromBranch: ['', Validators.required],
      rankRateRetired: ['', Validators.required],
      yearRetired: ['', Validators.required],
      comments: ['', Validators.required]
    });
  }


  onSubmit() {
    if (this.addGuestForm.valid) {
      //console.log("Form Submitted!");
      //this.BuildUser();

      this.addGuestForm.reset();
    }
  }

  // private BuildUser() {
  //   this.user.firstName = this.firstName.value;
  //   this.user.lastName = this.lastName.value;
  //   this.user.middleName = this.middleName.value;
  //   this.user.suffix = this.suffix.value;
  //   this.user.city = this.city.value;
  //   this.user.state = this.state.value;
  //   this.user.zipCode5 = this.zipCode5.value;
  //   this.user.zipCode4 = this.zipCode4.value;
  //   this.user.email = this.email.value;
  //   this.user.homePhoneAreaCode = this.homePhoneAreaCode.value;
  //   this.user.homePhonePrefix = this.homePhonePrefix.value;
  //   this.user.homePhoneLineNumber = this.homePhoneLineNumber.value;
  //   this.user.cellPhoneAreaCode = this.cellPhoneAreaCode.value;
  //   this.user.cellPhonePrefix = this.cellPhonePrefix.value;
  //   this.user.cellPhoneLineNumber = this.cellPhoneLineNumber.value;
  //   this.user.rankRateServing = this.cellPhoneLineNumber.value;
  //   this.user.swiftBoats = this.swiftBoats.value;
  //   this.user.datesOfService = this.datesOfService.value;
  //   this.user.corpsOneCuaViet = this.corpsOneCuaViet.value;
  //   this.user.corpsOneHue = this.corpsOneHue.value;
  //   this.user.corpsOneDaNang = this.corpsOneDaNang.value;
  //   this.user.corpsOneChuLai = this.corpsOneChuLai.value;
  //   this.user.corpsTwoQuiNhon = this.corpsTwoQuiNhon.value;
  //   this.user.corpsTwoCamRanhBay = this.corpsTwoCamRanhBay.value;
  //   this.user.corpsThreeCatLo = this.corpsThreeCatLo.value;
  //   this.user.corpsFourSeaFloat = this.corpsFourSeaFloat.value;
  //   this.user.corpsFourNamCan = this.corpsFourNamCan.value;
  //   this.user.corpsFourAnThoi = this.corpsFourAnThoi.value;
  //   this.user.retiredInMilitary = this.retiredInMilitary.value;
  //   this.user.retiredFromBranch = this.retiredFromBranch.value;
  //   this.user.rankRateRetired = this.rankRateRetired.value;
  //   this.user.yearRetired = this.yearRetired.value;
  //   this.user.comments = this.comments.value;
  // }

  /*
  sample object built in form
  {
  "firstName": "fi",
  "middleName": "mid",
  "lastName": "last",
  "email": "email",
  "suffix": "Sr",
  "streetAddress": "street",
  "city": "houston",
  "state": "TX",
  "zipCode5": "77459",
  "zipCode4": "",
  "homePhoneAreaCode": "111",
  "homePhonePrefix": "222",
  "homePhoneLineNumber": "3333",
  "cellPhoneAreaCode": "111",
  "cellPhonePrefix": "333",
  "cellPhoneLineNumber": "8888",
  "rankRate": "rank rate",
  "swiftBoats": "swiftboats",
  "corpsOneCuaViet": true,
  "corpsOneHue": "",
  "corpsOneDaNang": "",
  "corpsOneChuLai": "",
  "corpsTwoQuiNhon": false,
  "corpsTwoCamRanhBay": true,
  "corpsThreeCatLo": true,
  "corpsFourSeaFloat": "",
  "corpsFourNamCan": true,
  "corpsFourAnThoi": "",
  "datesOfService": "jan 1970",
  "retiredInMilitary": "Yes",
  "retiredFromBranch": "Air National Guard",
  "rankRateRetired": "retired",
  "yearRetired": "1971",
  "comments": "comment"
}
   */
}
