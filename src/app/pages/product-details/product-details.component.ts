import { Component } from '@angular/core';
import { ModalProductDetailsComponent } from '../../components/modal-product-details/modal-product-details.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [ModalProductDetailsComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
}
