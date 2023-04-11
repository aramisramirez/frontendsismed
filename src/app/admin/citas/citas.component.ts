import { Component } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }]
})
export class CitasComponent {
  selected: Date | null;

  date1: Date | null;
  date2: Date | null;

  constructor() {
    this.selected = null;
    this.date1 = null;
    this.date2 = null;
  }

  isConsecutive(date1: Date, date2: Date): boolean {
    const oneDay = 24 * 60 * 60 * 1000; // en milisegundos
    return Math.abs(date1.getTime() - date2.getTime()) === oneDay;
  }

  getCssClass(date: Date): string {
    if (this.selected && this.isConsecutive(this.selected, date)) {
      return 'consecutive-days';
    }
    this.selected = date;
    return '';
  }
}
