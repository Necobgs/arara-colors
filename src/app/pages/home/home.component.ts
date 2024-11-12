import { Component, signal, Signal } from '@angular/core';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { CardCategoryComponent } from '../../components/card-category/card-category.component';
import { CardProductComponent } from '../../components/card-product/card-product.component';
import { lastValueFrom } from 'rxjs';
import { Product } from '../../../api/models/interfaces/product';
import { ProductService } from '../../../api/services/product.service';
import { Category } from '../../../api/models/interfaces/category';
import { CategoryService } from '../../../api/services/category.service';
import { LoadingService } from '../../../api/services/loading.service';
import { DataProduct } from '../../../api/models/interfaces/dataProducts';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ PaginationComponent, CardCategoryComponent, CardProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  produtos!:DataProduct | null;
  categories!:Category[];
  pageNumber=signal(1);
  constructor(private productService:ProductService,
    private categoryService:CategoryService,
    private loadingService:LoadingService
  ){}

  async ngOnInit(){
    await this.loadProducts()
    this.categories = await lastValueFrom(this.categoryService.getAll())
  }

  async nextPage(){
    if(this.pageNumber()+1<=this.produtos!.totalPages){
      this.pageNumber.set(this.pageNumber()+1)
      await this.loadProducts()
    }
  }

  async returnPage(){
    if(this.pageNumber()-1>=1){
      this.pageNumber.set(this.pageNumber()-1)
      await this.loadProducts()
    }
  }

  async loadProducts(){
    this.produtos = await lastValueFrom(this.productService.getAll({page:this.pageNumber(),qty_per_page:10}))
  }
}