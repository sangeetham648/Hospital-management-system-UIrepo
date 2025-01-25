import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../interface/patient';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: 'update-patient.component.html',
  styleUrl: 'update-patient.component.css'
})
export class UpdatePatientComponent {
  patient:Patient = new Patient();
    
      id:number=0;
      constructor(private patientService :PatientService,private route:ActivatedRoute,private router:Router){}

      ngOnInit():void{
        this.id=this.route.snapshot.params['id'];
        this.patientService.getPatientById(this.id).subscribe(data=>{
          this.patient=data;
        })
      }
    
      savePatient(){
        this.patientService.updatePatient(this.patient.id,this.patient).subscribe(data=>{
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
