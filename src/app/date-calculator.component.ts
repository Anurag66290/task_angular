import { Component } from '@angular/core';

@Component({
  selector: 'app-date-calculator',
  templateUrl: './date-calculator.component.html',
  styleUrls: ['./date-calculator.component.css'],
})
export class DateCalculatorComponent {
  selectedDates: string = '';
  consoleOutput: string = ''; 
  onDateInputChange() {
    
    this.consoleOutput = 'Input changed: ' + this.selectedDates;
    console.log(this.consoleOutput);
  }

  calculateDaysInDates() {
 
    const daysInDates = this.selectedDates.split(',').map(date => {
      return this.calculateDaysFromDate(new Date(date.trim()));
    });
    this.consoleOutput = 'Days in Dates: ' + daysInDates.join(', ');
    console.log(this.consoleOutput);
  }

  calculateDaysFromDate(date: Date): number {
    const currentDate = new Date();
    const difference = date.getTime() - currentDate.getTime();
    const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
    return daysDifference;
  }

  getDaysInMonth() {
  
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const lastDay = new Date(year, month + 1, 0);
    const totalDays = lastDay.getDate();
    this.consoleOutput = 'Total days in the current month: ' + totalDays;
    console.log(this.consoleOutput);
  }
}
