import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';

const routes: Routes = [
  {
    path:'admin',component:AdmindashComponent
  },
  {
    path:'appointmentlist',component:AppointmentComponent
  },
  {
    path:'addAppointment',component:CreateAppointmentComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'doctor-dashboard',component:DocdashComponent
  },
  {
    path:'add-patient',component:AddPatientComponent
  },
  {
    path:'view-medicine',component:MedicineListComponent
  },
  {
    path:'add-medicine',component:AddMedicineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
