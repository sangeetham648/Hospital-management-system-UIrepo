import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from '../interface/medicine';
import { MedicineService } from '../services/medicine.service';

@Component({
  selector: 'app-update-medicine',
  templateUrl: 'update-medicine.component.html',
  styleUrl: 'update-medicine.component.css'
})
export class UpdateMedicineComponent {
  medicine: Medicine = new Medicine();
  id: number = 0;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.medicineService.getMedicineById(this.id).subscribe(data => {
      this.medicine = data;
    })
  }
  
  constructor(private medicineService: MedicineService, private route: ActivatedRoute, private router: Router) { }

  saveMedicine() {
    this.medicineService.addMedicine(this.medicine).subscribe(data => {
      console.log(data);
      this.goToMedicine();
    })
  }

  onSubmit() {
    this.saveMedicine();
  }

  goToMedicine() {
    this.router.navigate(['/view-medicine']);
  }
}
