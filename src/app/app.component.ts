import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  
  // Function to calculate the number of days in a given date.
  calculateNumberOfDays(dateString: string): number {
    const date = new Date(dateString);
    return date.getDate();
  }

  // Function to get the total number of days in a given month.
  getTotalDaysInMonth(year: number, month: number): number {
    // Create a date for the 0th day of the next month.
    const lastDayOfMonth = new Date(year, month, 0);
    return lastDayOfMonth.getDate();
  }

  // Function to generate an array of dates in a specified month.
  generateDatesInMonth(year: number, month: number, numberOfDates: number): any[] {
    const dateArray = [];
    for (let day = 1; day <= numberOfDates; day++) {
      const dateString = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      const numberOfDays = this.calculateNumberOfDays(dateString);
      const totalDaysInMonth = this.getTotalDaysInMonth(year, month);
      dateArray.push({
        date: dateString,
        numberOfDays,
        totalDaysInMonth
      });
    }
    return dateArray;
  }

  ngOnInit() {
    // Define the year and month (e.g., 2023-03 for March 2023).
    const year = 2023;
    const month = 3; // March

    // Generate an array of dates (1 to 20 dates in the selected month).
    const datesInMonth = this.generateDatesInMonth(year, month, 20);

    // Output the results
    datesInMonth.forEach((date, index) => {
      console.log(`Date ${index + 1}: ${date.date} has ${date.numberOfDays} days. Total days in the month: ${date.totalDaysInMonth}`);
    });
  }
}
