import { Component } from '@angular/core';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { CardCategoryComponent } from '../../components/card-category/card-category.component';
import { CardProductComponent } from '../../components/card-product/card-product.component';
import { lastValueFrom } from 'rxjs';
import { Product } from '../../../api/models/interfaces/product';
import { ProductService } from '../../../api/services/product.service';
import { Category } from '../../../api/models/interfaces/category';
import { CategoryService } from '../../../api/services/category.service';
import { LoadingService } from '../../../api/services/loading.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ PaginationComponent, CardCategoryComponent, CardProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  produtos!:Product[] | null;
  categories!:Category[];
  constructor(private productService:ProductService,
    private categoryService:CategoryService,
    private loadingService:LoadingService
  ){}

  async ngOnInit(){
    this.produtos = await lastValueFrom(this.productService.getAll({page:1,qty_per_page:10}))
    this.categories = await lastValueFrom(this.categoryService.getAll())
  }
}