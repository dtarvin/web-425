/*
; ============================================
; Title:  tarvin-assignment-1.4.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   08 Jul 2019
; Description: Assignment 1.4 - TypeScript
;===========================================
*/

let classNumber: string = 'WEB425';
let className: string = 'Angular With TypeScript';

function myClass(classNumber:string, className: string): string {
    return 'I am taking ' + classNumber + ' ' + className;
}

console.log(myClass(classNumber, className));