/*
; ============================================
; Title:  invoice-summary-dialog.component.spec.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   08 Sep 2019
; Description: Bob's Computer Repair Shop
;=============================================
*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceSummaryDialogComponent } from './invoice-summary-dialog.component';

describe('InvoiceSummaryDialogComponent', () => {
  let component: InvoiceSummaryDialogComponent;
  let fixture: ComponentFixture<InvoiceSummaryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceSummaryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceSummaryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
