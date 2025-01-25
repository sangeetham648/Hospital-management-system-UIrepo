// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Patient } from './patient';

// @Injectable({
//   providedIn: 'root'
// })
// export class PatientService {

//   constructor(private httpClient:HttpClient){}

//   private baseUrl="http://localhost:8080/hms/patient"

//   getPatientList():Observable<Patient[]>{
//     return this.httpClient.get<Patient[]>(`${this.baseUrl}`)
//   }
// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../interface/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl = "http://localhost:8080/hms/patient";

  constructor(private httpClient: HttpClient) { }
  
  getPatientslist(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`);
  }

  addPatient(patient: Patient): Observable<Patient> {
    return this.httpClient.post<Patient>(`${this.baseUrl}/addPatient`, patient);
  }

  getPatientById(id: number): Observable<Patient> {   
    return this.httpClient.get<Patient>(`${this.baseUrl}/${id}`);
  }

  updatePatient(id: number, patient: Patient): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/updatePatient/${id}`, patient);
  }
  
  deletePatient(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/deletePatient/${id}`);
  }
}