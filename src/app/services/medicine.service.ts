import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from '../interface/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private baseUrl = "http://localhost:8080/hms/medicine";
  
  constructor(private httpClient: HttpClient) { }

    getMedicineslist(): Observable<Medicine[]> {
      return this.httpClient.get<Medicine[]>(`${this.baseUrl}`);
    }
  
    addMedicine(patient: Medicine): Observable<Medicine> {
      return this.httpClient.post<Medicine>(`${this.baseUrl}/addMedicine`, patient);
    }
  
    getMedicineById(id: number): Observable<Medicine> {   
      return this.httpClient.get<Medicine>(`${this.baseUrl}/${id}`);
    }
  
    updateMedicine(id: number, medicine: Medicine): Observable<Object> {
      return this.httpClient.put(`${this.baseUrl}/${id}`, medicine);
    }
    
    deleteMedicine(id: number): Observable<Object> {
      return this.httpClient.delete(`${this.baseUrl}/deleteMedicine/${id}`);
    }

}
