import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-product-details.component.html',
  styleUrls: ['./modal-product-details.component.css']
})
export class ModalProductDetailsComponent {
  @Input() nomeProduto!: string;
  @Input() quantidadeProduto!: number;
  @Input() precoProduto!: string;

  isClicked: 'remove' | 'add' | null = null;
  quantidade: number = 1;

  toggleClick(buttonId: 'remove' | 'add'): void {
    this.isClicked = (this.isClicked === buttonId) ? null : buttonId;

    if (buttonId === 'remove' && this.quantidade > 1) {
      this.quantidade -= 1;
    } else if (buttonId === 'add') {
      this.quantidade += 1
    }

    setTimeout(() => {
      this.isClicked = null;
    }, 500);
  }
}
