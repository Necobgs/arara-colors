import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path:'sobre-nos',
    component:SobreNosComponent
  }
];
