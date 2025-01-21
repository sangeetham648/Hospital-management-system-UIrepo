import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../interface/patient';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: 'add-patient.component.html',
  styleUrl: 'add-patient.component.css'
})
export class AddPatientComponent {
  patient:Patient = new Patient();
  
    constructor(private patientService :PatientService,private router:Router){}
  
    savePatient(){
      this.patientService.addPatient(this.patient).subscribe(data=>{
        console.log(data);
        this.goToPatient();
      })
    }
  
    onSubmit(){
      this.savePatient();
    }
  
    goToPatient(){
      this.router.navigate(['/doctor-dashboard']);
    }
  
}
