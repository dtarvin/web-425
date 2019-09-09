/*
; ============================================
; Title:  invoice-summary-dialog.component.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   08 Sep 2019
; Description: Bob's Computer Repair Shop
;=============================================
*/

import { BaseLayoutComponent } from './../../shared/base-layout/base-layout.component';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-invoice-summary-dialog',
  templateUrl: './invoice-summary-dialog.component.html',
  styleUrls: ['./invoice-summary-dialog.component.scss']
})
export class InvoiceSummaryDialogComponent implements OnInit {

  @Input() selectedFixes;

  constructor(private dialogRef: MatDialogRef<BaseLayoutComponent>,
              @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
  }

  confirm() {
    this.dialogRef.close();
    location.reload();
  }
}
