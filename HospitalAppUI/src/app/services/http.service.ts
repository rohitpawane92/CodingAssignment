import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { }

  registerpatient(patient) {
    console.log('Patient Model', [patient]);
    return this._http.post('http://localhost:53816/api/Hospital/RegisterPatient', patient);
  }

  getAllStates() {
    return this._http.get('http://localhost:53816/api/Hospital/GetAllStates')
  }

  getCities(state) {
    return this._http.get('http://localhost:53816/api/Hospital/GetCities?state=' + state);
  }

  getAllPatients() {
    return this._http.get('http://localhost:53816/api/Hospital/GetAllPatients');
  }

}

