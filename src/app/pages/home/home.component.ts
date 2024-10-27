import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CardSaleComponent } from '../../components/card-sale/card-sale.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { CardCategoryComponent } from '../../components/card-category/card-category.component';
import { CardProductComponent } from '../../components/card-product/card-product.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/interfaces/product';
import { catchError, tap } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, CardSaleComponent, PaginationComponent, CardCategoryComponent, CardProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  produtos!:Product[]
  constructor(private productService:ProductService){}

  ngOnInit(){
    this.productService.getAll({page:1,qty_per_page:10}).pipe(
      tap(data=>  {this.produtos = data}),
      catchError(error => {console.log(`"${error}"`); return error;})
    ).subscribe()
  }

}
