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
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

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
  },
  {
    path:'update-patient/:id',component:UpdatePatientComponent
  },
  {
    path:'update-medicine/:id',component:UpdateMedicineComponent
  },
  {
    path:'update-appointment/:id',component:UpdateAppointmentComponent
  },
  {
    path:'login-page',component:AdminLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }