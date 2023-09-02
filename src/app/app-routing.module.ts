import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { OurServicesComponent } from './our-services/our-services.component';
// import { BookarideComponent } from './bookaride/bookaride.component';
import { MainDeptComponent } from './main-dept/main-dept.component';
import { ProductSelectionComponent } from './product-selection/product-selection.component';
import { AddedToCartComponent } from './added-to-cart/added-to-cart.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'main-dept', component: MainDeptComponent},
  {path: 'product-selection', component: ProductSelectionComponent},
  {path: 'addedtocart', component: AddedToCartComponent},
  {path: 'shoppingCart', component: ShoppingCartComponent},

  { path: '',   redirectTo: 'home', pathMatch: 'full' }, // redirect to `home-componenet`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
