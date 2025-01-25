import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../interface/appointment';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-update-appointment',
  templateUrl: 'update-appointment.component.html',
  styleUrl: 'update-appointment.component.css'
})
export class UpdateAppointmentComponent {
  appointment: Appointment = new Appointment();

  id: number = 0;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.appointmentService.getAppointmentById(this.id).subscribe(data => {
      this.appointment = data;
    })
  }

  constructor(private appointmentService: AppointmentService, private route: ActivatedRoute, private router: Router) { }

  saveAppointment() {
    this.appointmentService.createAppointment(this.appointment).subscribe(data => {
      console.log(data);
      this.goToAppointment();
    })
  }

  onSubmit() {
    this.saveAppointment();
  }

  goToAppointment() {
    this.router.navigate(['/appointmentlist']);
  }
}
