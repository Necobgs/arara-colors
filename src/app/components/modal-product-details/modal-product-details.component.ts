import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-product-details.component.html',
  styleUrls: ['./modal-product-details.component.css']
})
export class ModalProductDetailsComponent {

  constructor(private readonly router:ActivatedRoute){}
  
  ngOnInit(){
    this.router.params.subscribe((params:any)=>{
      this.id_produto = +params.id
      
    })
  }
  
  id_produto!:number;
  produto = 
    {
        product_id: 2,
        product_name: "Tinta de 3L azul bb",
        color_name: "azul bb",
        quantity_in_stock: 5,
        price: 12.50,
        category_id: 1,
        created_at: "2024-10-23T04:07:07.924Z",
        price_cash: 11.88,
        installment_times: 1,
        category: {
            category_id: 1,
            category_name: "Categoria 1",
            description: "Categoria teste"
        },
        productImages: [
            {
                id: 1,
                product_path_image: "assets/images/produto1.jpeg",
                product_id: 2
            },
            {
                id: 3,
                product_path_image: "assets/images/produto2.jpeg",
                product_id: 2
            }
        ]
    }

  

  imagemSelecionada = this.produto.productImages[0].product_path_image
  isClicked: 'remove' | 'add' | null = null;
  quantidade: number = 1;

  // buttonId: 'remove' | 'add'
  toggleClick(add_remove:number): void {
    if(this.quantidade+add_remove > 0 && this.quantidade+add_remove <= this.produto.quantity_in_stock){
      this.quantidade += add_remove
    }
    // this.isClicked = (this.isClicked === buttonId) ? null : buttonId;

    // if (buttonId === 'remove' && this.quantidade > 1) {
    //   this.quantidade -= 1;
    // } else if (buttonId === 'add' && this.quantidade < this.produto.quantity_in_stock) {
    //   this.quantidade += 1
    // }

    // setTimeout(() => {
    //   this.isClicked = null;
    // }, 500);
  }

  alterarImagem(event:Event){
   const image = event.currentTarget as HTMLElement
   this.imagemSelecionada = image.getAttribute('src')!
  }
  

}
