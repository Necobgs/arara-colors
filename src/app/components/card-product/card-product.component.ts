import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CurrencyFormatterPipe } from '../../pipes/currency-formatter.pipe';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [CommonModule, RouterModule , CurrencyFormatterPipe],
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css'],
})
export class CardProductComponent {
  @Input() nomeProduto!: string;
  @Input() quantidadeProduto!: number;
  @Input() precoProduto!: number;
  @Input() imagem!: string;
  @Input() id_produto!:number; 

  isClicked: 'remove' | 'add' | null = null;
  quantidade: number = 1;

  toggleClick(buttonId: 'remove' | 'add'): void {
    this.isClicked = (this.isClicked === buttonId) ? null : buttonId;

    if (buttonId === 'remove' && this.quantidade > 1) {
      this.quantidade -= 1;
    } else if (buttonId === 'add' && this.quantidade < this.quantidadeProduto) {
      this.quantidade += 1
    }

    setTimeout(() => {
      this.isClicked = null;
    }, 500);
  }
}
