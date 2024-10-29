import { Component, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../api/models/interfaces/product';
import { ProductService } from '../../../api/services/product.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-modal-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-product-details.component.html',
  styleUrls: ['./modal-product-details.component.css'],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ]
  
})
export class ModalProductDetailsComponent {

  
  produto!:Product;
  imagemSelecionada!:string;
  quantidade: number = 1;
  qtd_vezes!: number | string;

  

  constructor(private router:ActivatedRoute,
    private productService:ProductService 
  ){}

  

  ngOnInit() {
    this.router.params.subscribe((params: any) => {
      this.productService.getOne(params.id).pipe(
        tap((produto) => {
          this.produto = produto[0];
          console.log(produto)
          this.imagemSelecionada = this.produto.productImages[0].product_path_image;
        })
      ).subscribe();
    });
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
