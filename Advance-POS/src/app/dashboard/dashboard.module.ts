import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InventoryComponent } from './INVENTORY/inventory/inventory.component';
import { ProductsComponent } from './INVENTORY/products/products.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InventoryComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
