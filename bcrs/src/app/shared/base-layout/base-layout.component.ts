/*
; ============================================
; Title:  base-layout.component.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   08 Sep 2019
; Description: Bob's Computer Repair Shop
;=============================================
*/

import { InvoiceSummaryDialogComponent } from './../../pages/invoice-summary-dialog/invoice-summary-dialog.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { tap, filter, map } from 'rxjs/operators';
import { Fix } from '../fix';
import { FixService } from '../fix.service';
import { Observable, Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit, OnDestroy {

  fixes: Fix[];
  subs: Subscription[] = []
  selectedFixes: Fix[] = [];

  constructor(private fixService: FixService, private dialog: MatDialog) { }

  ngOnInit() {
    const sub = this.fixService.getFix()
      .subscribe(fixes => {
        this.fixes = fixes;
      });
      this.subs.push(sub);
  }

  getCheckboxes() {
    this.selectedFixes = this.fixes
      .filter(f => f.checked);
        // return this.selectedFixes;
  }

  getInvoice() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      selectedFixes: this.selectedFixes
    }
    const dialogRef = this.dialog.open(InvoiceSummaryDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    )

  }

  ngOnDestroy() {
    for (const sub of this.subs) {
      if(sub) {
        try {
          sub.unsubscribe();
        } catch {}
      }
    }
  }
}
