import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../interface/medicine';
import { MedicineService } from '../services/medicine.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: 'medicine-list.component.html',
  styleUrl: 'medicine-list.component.css'
})
export class MedicineListComponent {
  medicines: Medicine[] = [];

  constructor(private medicineService: MedicineService, private router: Router) { }

  ngOnInit(): void {
    this.getMedicine();
  }

  private getMedicine() {
    this.medicineService.getMedicineslist().subscribe(data => {
      this.medicines = data;
    });
  }

  updateMedicine(id:number){
    this.router.navigate(['update-medicine',id])
  }

  deleteMedicine(id: number) {
    this.medicineService.deleteMedicine(id).subscribe(data => {
      console.log(data);
      this.getMedicine();
    });
  }
}
