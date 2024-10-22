import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {
  @Input() nomeProduto!: string;
  @Input() quantidadeProduto!: number;
  @Input() precoProduto!: number;

  isClickedRemove = false;
  isClickedAdd = false;

  quantidade = 1;

  toggleClick(buttonId: string) {
    if (buttonId == 'remove') {
      this.isClickedRemove = !this.isClickedRemove;
      this.isClickedAdd = false;

      if (this.quantidade > 1) {
        this.quantidade -= 1
      }

      setTimeout(() => {
        this.isClickedRemove = !this.isClickedRemove;
      }, 500)
    } else if (buttonId === 'add') {
      this.isClickedAdd = !this.isClickedAdd;
      this.isClickedRemove = false;

      this.quantidade += 1

      setTimeout(() => {
        this.isClickedAdd = !this.isClickedAdd;
      }, 500)
    }
  }
}
