import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardSaleComponent } from './card-sale/card-sale.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CardCategoryComponent } from './card-category/card-category.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CarouselComponent, CardSaleComponent, PaginationComponent, CardCategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
