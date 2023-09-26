import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { OurServicesComponent } from './our-services/our-services.component';
// import { BookarideComponent } from './bookaride/bookaride.component';
import { MainDeptComponent } from './main-dept/main-dept.component';
import { ProductSelectionComponent } from './product-selection/product-selection.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AccountLoginPageComponent } from './account-login-page/account-login-page.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'main-dept', component: MainDeptComponent},
  {path: 'product-selection', component: ProductSelectionComponent},
  {path: 'shoppingCart', component: ShoppingCartComponent},
  {path: 'accountLogin', component: AccountLoginPageComponent},


  { path: '',   redirectTo: 'home', pathMatch: 'full' }, // redirect to `home-componenet`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
