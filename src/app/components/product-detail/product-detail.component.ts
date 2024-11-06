import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalProductDetailsComponent } from '../modal-product-details/modal-product-details.component';
import { ModalProductFeaturesComponent } from "../modal-product-features/modal-product-features.component";
import { Product } from '../../../api/models/interfaces/product';
import { lastValueFrom, Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../api/services/product.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ModalProductDetailsComponent, ModalProductFeaturesComponent,AsyncPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent{
  
  produto$!:Observable<Product>;

  constructor(private route:ActivatedRoute,
    private productService:ProductService
  ){}

  ngOnInit(){
    this.produto$ = this.route.paramMap.pipe(
      switchMap(params => this.productService.getOne(+params.get('id')!))
    );
  }
}