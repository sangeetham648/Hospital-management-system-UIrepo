import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../interface/medicine';
import { MedicineService } from '../services/medicine.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: 'add-medicine.component.html',
  styleUrl: 'add-medicine.component.css',
})
export class AddMedicineComponent {
  medicine: Medicine = new Medicine();

  constructor(
    private medicineService: MedicineService,
    private router: Router
  ) {}

  saveMedicine() {
    this.medicineService.addMedicine(this.medicine).subscribe((data) => {
      console.log(data);
      this.goToMedicine();
    });
  }

  onSubmit() {
    this.saveMedicine();
  }

  goToMedicine() {
    this.router.navigate(['/view-medicine']);
  }
}
