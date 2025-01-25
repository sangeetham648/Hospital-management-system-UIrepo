import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../interface/patient';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-docdash',
  templateUrl: 'docdash.component.html',
  styleUrl: 'docdash.component.css'
})
export class DocdashComponent {
  patients: Patient[] = [];

  constructor(private patientService: PatientService,
    private router: Router) { }

  ngOnInit(): void {

    this.getPatients();
  }

  private getPatients() {
    this.patientService.getPatientslist().subscribe(data => {
      this.patients = data;
    });

  }

  updatePatient(id: number) {
    this.router.navigate(['update-patient', id])
  }

  deletePatient(id: number) {
    this.patientService.deletePatient(id).subscribe(data => {
      console.log(data);
      this.getPatients();
    });
  }
}
