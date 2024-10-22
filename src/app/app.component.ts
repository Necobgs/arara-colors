import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardSaleComponent } from './components/card-sale/card-sale.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CardCategoryComponent } from './components/card-category/card-category.component';
import { CardProductComponent } from './components/card-product/card-product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
