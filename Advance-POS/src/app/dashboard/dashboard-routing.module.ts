import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InventoryComponent } from './INVENTORY/inventory/inventory.component';
import { ProductsComponent } from './INVENTORY/products/products.component';

const routes: Routes = [
  {
    path:'layout',
    component:DashboardComponent,
    children:[
      {path:'inventory',component:InventoryComponent},
      {path:'products',component:ProductsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
