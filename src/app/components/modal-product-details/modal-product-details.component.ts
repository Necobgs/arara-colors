import { Component, Input, signal } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { Product } from '../../../api/models/interfaces/product';
import { ProductService } from '../../../api/services/product.service';
import { lastValueFrom, Observable, tap } from 'rxjs';
import { ActivatedRoute } from "@angular/router"
import { CurrencyFormatterPipe } from "../../pipes/currency-formatter.pipe";

@Component({
  selector: 'app-modal-product-details',
  standalone: true,
  imports: [CommonModule, CurrencyFormatterPipe],
  templateUrl: './modal-product-details.component.html',
  styleUrls: ['./modal-product-details.component.css']
  
})
export class ModalProductDetailsComponent{
  

  @Input() produto!:Product;
  imagemSelecionada!:string;
  quantidade: number = 1;  

  ngOnInit(){
    this.imagemSelecionada = this.produto.productImages[0].product_path_image;
  }

  toggleClick(add_remove:number): void {
    if(this.quantidade+add_remove > 0 && this.quantidade+add_remove <= this.produto.quantity_in_stock){
      this.quantidade += add_remove
    }
  }

  alterarImagem(event:Event){
   const image = event.currentTarget as HTMLElement
   this.imagemSelecionada = image.getAttribute('src')!
  }
}