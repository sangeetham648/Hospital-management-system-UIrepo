import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../interface/appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {

  appointments: Appointment[]=[];

    constructor(private appointmentService: AppointmentService,
      private router: Router) { }
  
    ngOnInit(): void {
  
      this.getAppointments();
    }
  
    private getAppointments(){
      this.appointmentService.getAllAppointments().subscribe(data => {
         this.appointments = data; 
      });
    }

   delete(id:number){
      this.appointmentService.deleteAppointment(id).subscribe(data =>{
        console.log(data);
        this.getAppointments();
      })
    }
}
