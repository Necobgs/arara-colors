import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ModalProductDetailsComponent } from './components/modal-product-details/modal-product-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product/:id',
    component: ModalProductDetailsComponent
  },
];
