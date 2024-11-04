import { Component, Input } from '@angular/core';
import { ProductFeature } from '../../../api/models/interfaces/product-feature';

@Component({
  selector: 'app-modal-product-features',
  standalone: true,
  imports: [],
  templateUrl: './modal-product-features.component.html',
  styleUrl: './modal-product-features.component.css'
})
export class ModalProductFeaturesComponent {
  @Input() caracteristicas!:ProductFeature[];
}
