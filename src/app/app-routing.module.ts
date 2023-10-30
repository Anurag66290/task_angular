import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateCalculatorComponent } from './date-calculator.component';

const routes: Routes = [
  // Other routes if you have them
  { path: 'date-calculator', component: DateCalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
