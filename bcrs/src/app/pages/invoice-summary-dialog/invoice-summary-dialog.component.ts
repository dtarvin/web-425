import { BaseLayoutComponent } from './../../shared/base-layout/base-layout.component';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-invoice-summary-dialog',
  templateUrl: './invoice-summary-dialog.component.html',
  styleUrls: ['./invoice-summary-dialog.component.scss']
})
export class InvoiceSummaryDialogComponent implements OnInit {

  @Input() public invoice;

  constructor(private dialog: MatDialogRef<BaseLayoutComponent>) { }

  ngOnInit() {
  }

  confirm() {
    this.dialog.close();
    location.reload();
  }
}
