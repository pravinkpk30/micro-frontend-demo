import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Drug {
  name: string;
  dosage: string;
}

interface Order {
  id: number;
  customer: string;
  status: string;
  drugs: Drug[];
  newDrugName?: string;
  newDrugDosage?: string;
  isEditing?: boolean;
}

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="order-dashboard">
      <div class="create-order">
        <h3>Create New Order</h3>
        <input [(ngModel)]="newCustomer" placeholder="Customer Name" />
        <button (click)="createOrder()" class="btn-primary">Create Order</button>
      </div>

      <div class="orders-list">
        <h3>Active Orders</h3>
        <table *ngIf="orders.length > 0; else noOrders">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Drugs</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let order of orders">
              <td>{{order.id}}</td>
              <td>{{order.customer}}</td>
              <td>
                <span [class]="'badge ' + order.status.toLowerCase()">{{order.status}}</span>
              </td>
              <td>
                <ul class="drug-list">
                  <li *ngFor="let drug of order.drugs; let i = index">
                    {{drug.name}} - {{drug.dosage}}
                    <span class="remove-drug" (click)="removeDrug(order, i)">×</span>
                  </li>
                  <li class="add-drug-row">
                    <input [(ngModel)]="order.newDrugName" placeholder="Drug" class="sm-input"/>
                    <input [(ngModel)]="order.newDrugDosage" placeholder="Dose" class="sm-input"/>
                    <button (click)="addDrug(order)" class="btn-sm">+</button>
                  </li>
                </ul>
              </td>
              <td>
                <button (click)="deleteOrder(order.id)" class="btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <ng-template #noOrders>
            <p>No active orders.</p>
        </ng-template>
      </div>
    </div>
  `,
  styles: [`
    .order-dashboard {
      background: white;
      padding: 15px;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .create-order {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #eee;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      padding: 10px;
      border-bottom: 1px solid #eee;
      text-align: left;
      vertical-align: top;
    }
    th {
      background-color: #f8f9fa;
    }
    .badge {
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.8rem;
    }
    .badge.pending { background-color: #fff3cd; color: #856404; }
    .badge.completed { background-color: #d4edda; color: #155724; }
    
    .drug-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .drug-list li {
      margin-bottom: 4px;
      font-size: 0.9rem;
    }
    .remove-drug {
      color: red;
      cursor: pointer;
      margin-left: 5px;
      font-weight: bold;
    }
    .btn-primary {
      background-color: #dd0031;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }
    .btn-danger {
      background-color: #dc3545;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .btn-sm {
      padding: 2px 6px;
      font-size: 0.8rem;
      cursor: pointer;
    }
    .sm-input {
      width: 60px;
      padding: 2px;
      font-size: 0.8rem;
      margin-right: 2px;
    }
    input {
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-right: 10px;
    }
  `]
})
export class OrderComponent {
  newCustomer: string = '';
  orders: Order[] = [
    { 
      id: 1001, 
      customer: 'John Doe', 
      status: 'Pending', 
      drugs: [
        {name: 'Aspirin', dosage: '100mg'},
        {name: 'Lipitor', dosage: '20mg'}
      ] 
    }
  ];

  createOrder() {
    if (!this.newCustomer) return;
    const newOrder: Order = {
      id: Math.floor(Math.random() * 10000),
      customer: this.newCustomer,
      status: 'Pending',
      drugs: []
    };
    this.orders.push(newOrder);
    this.newCustomer = '';
  }

  deleteOrder(id: number) {
    this.orders = this.orders.filter(o => o.id !== id);
  }

  addDrug(order: Order) {
    if (order.newDrugName && order.newDrugDosage) {
      order.drugs.push({
        name: order.newDrugName,
        dosage: order.newDrugDosage
      });
      order.newDrugName = '';
      order.newDrugDosage = '';
    }
  }

  removeDrug(order: Order, index: number) {
    order.drugs.splice(index, 1);
  }
}
