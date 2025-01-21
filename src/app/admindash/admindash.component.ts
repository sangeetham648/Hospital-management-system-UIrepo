// import { Component } from '@angular/core';
// import { Patient } from '../patient';
// import { PatientService } from '../patient.service';

// @Component({
//   selector: 'app-admindash',
//   standalone: false,
//   templateUrl: 'admindash.component.html',
//   styleUrl: 'admindash.component.css'
// })
// export class AdmindashComponent {
//   patients:Patient[]=[];
//   constructor(private patientService:PatientService){}
//   ngOnInit():void{
//     this.getPatients();
//   }

//   getPatients() {
//     this.patientService.getPatientList().subscribe({
//       next: (data) => {
//         console.log('Patient data:', data);
//         this.patients = data;
//       },
//       error: (err) => {
//         console.error('Error fetching patient data:', err);
//       }
//     });
//   }
  

// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../interface/patient';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {

  searchText: string="";
  patients: Patient[]=[]; 

  constructor(private patientService: PatientService,
    private router: Router) { }

  ngOnInit(): void {

    this.getPatients();
  }

  private getPatients(){
    this.patientService.getPatientslist().subscribe(data => { 
      this.patients = data; 
    });
  
  }
  searchPatients() {
    if (this.searchText.trim() === '') {
      // If the search text is empty, reset to the original patient list
      this.getPatients();
    } else {
      // Filter patients based on the search text
      this.patients = this.patients.filter(patient =>
        patient.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
  deletePatient(id: number) {
    this.patientService.deletePatient(id).subscribe(data => {
      console.log(data);
      this.getPatients();
    } ); 
  }

}