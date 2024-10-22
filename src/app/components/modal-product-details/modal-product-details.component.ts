import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-product-details',
  standalone: true,
  imports: [],
  templateUrl: './modal-product-details.component.html',
  styleUrl: './modal-product-details.component.css'
})
export class ModalProductDetailsComponent {
  @Input() nomeProduto!: string;
  @Input() quantidadeProduto!: number;
  @Input() precoProduto!: number;
}
