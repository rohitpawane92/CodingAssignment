import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from '../../services/http.service';


export interface PeriodicElement {
  //id: number;
  name: string;
  surName: string;
  //cityId: string;
  dob: number;
  gender: number;

}


interface Dropdown {
  name: string;
  value: string;
}

interface state {
  Id: number;
  Name: string;
}


interface city {
  StateId: number;
  Name: string;
}




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  tomorrow = new Date();

  //previous = new Date;

  minDate: Date;
  maxDate: Date;
  //todayDate;

  displayedColumns: string[] = ['name', 'surName', 'dob', 'gender'];
  dataSource;

  patient: any = [];

  //selectedCities: Dropdown[] = [];

  allStates: state[] = [];

  cities: city[] = [];

  genders: Dropdown[] = [{ name: 'Male', value: 'M' }, { name: 'Female', value: 'F' }];


  registerForm: FormGroup;


  constructor(private fb: FormBuilder, private httpService: HttpService) {
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);


    const currentYear = new Date().getFullYear();

    this.minDate = new Date(currentYear - 100, 0, 1);
    console.log('Min Date', [this.minDate]);

  }



  ngOnInit() {

    this.httpService.getAllStates().subscribe((res) => {
      Object.assign(this.allStates, res);

    }, (err) => { });

    this.httpService.getAllPatients().subscribe((res) => {
      console.log('All Registered Patients', [res]);
      this.dataSource = res;
    }, (err) => {
    });


    this.registerForm = this.fb.group({
      state: [''],
      name: [''],
      surname: [''],
      dob: [''],
      gender: [''],
      city: ['']
    });


  }


  getstate() {
    return this.registerForm.get('state');
  }

  getcity() {
    return this.registerForm.get('city');
  }

  getdob() {
    return this.registerForm.get('dob');
  }

  getgender() {
    return this.registerForm.get('gender');
  }

  getname() {
    return this.registerForm.get('name');
  }

  getsurname() {
    return this.registerForm.get('surname');
  }


  populateCities(e) {



    this.httpService.getCities(this.registerForm.value.state).subscribe((res) => {
      Object.assign(this.cities, res);
    }, (err) => { });


  }


  registerUser() {
    console.log('All Form Result', [this.registerForm.value]);
    this.patient.Name = this.registerForm.value.name;
    this.patient.SurName = this.registerForm.value.surname;
    this.patient.DOB = this.registerForm.value.dob;
    this.patient.Gender = this.registerForm.value.gender;
    this.patient.CityId = this.registerForm.value.city;
    this.patient.State = this.registerForm.value.state;
    this.httpService.registerpatient(this.registerForm.value).subscribe((res) => {
      console.log('Server response', [res]);
    },
      (err) => { });
  }

}
