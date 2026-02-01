import { Component } from '@angular/core';
import { OrderComponent } from './order/order.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [OrderComponent],
  template: `
    <div class="angular-app-container">
      <h2>Order Management (Angular MFE)</h2>
      <app-order></app-order>
    </div>
  `,
  styles: [`
    .angular-app-container {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      padding: 20px;
      border: 4px solid #dd0031;
      background-color: #fff5f7;
      border-radius: 8px;
    }
    h2 {
      color: #a6120d;
    }
  `]
})
export class AppComponent { }
