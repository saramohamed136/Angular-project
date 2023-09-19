import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
{
  path:'',
  component: ProductListComponent
},
{
  path:'product-details/:id',
  component: ProductDetailsComponent
},
{
  path:'login',
  component: LoginComponent
},
{
  path:'card',
  component: CardComponent
},

{
  path:'register',
  component: RegisterComponent
},
{
  path:'**',
  component: NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
