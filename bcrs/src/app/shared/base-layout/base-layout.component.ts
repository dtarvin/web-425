import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { RepairService } from '../repair.service';
import { Repair } from '../repair';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  providers: [RepairService]
})
export class BaseLayoutComponent implements OnInit {

  repairs: Observable<Repair[]>;

  constructor(private repairService: RepairService) { }

  ngOnInit() {
    this.repairs = this.repairService.getRepair();
  }

}
