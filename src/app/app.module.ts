import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { FormsModule } from '@angular/forms';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { DocdashComponent } from './docdash/docdash.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmindashComponent,
    AppointmentComponent,
    CreateAppointmentComponent,
    DocdashComponent,
    AddPatientComponent,
    MedicineListComponent,
    AddMedicineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
