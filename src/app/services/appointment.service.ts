import { Injectable } from '@angular/core';
import { Appointment } from '../interface/appointment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl = "http://localhost:8080/hms/appointment";

  constructor(private httpClient: HttpClient) { }
  
  getAllAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);
  }

  createAppointment(appointment:Appointment):Observable<Appointment>{
    return this.httpClient.post<Appointment>(`${this.baseUrl}/addAppointment`,appointment);
  }

  deleteAppointment(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/deleteAppointment/${id}`);
  }
}
