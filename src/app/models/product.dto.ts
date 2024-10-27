export class ProductDto{
    page:number;
    qty_per_page:number;
    category_id?:number;
    color_name?:string;
    price_gt?:number;
    price_lt?:number;
    constructor(filters:{category_id?:number,color_name?:string,price_gt?:number,price_lt?:number,qty_per_page:number,page:number}){
        this.category_id  = filters.category_id
        this.color_name   = filters.color_name
        this.price_gt     = filters.price_gt
        this.price_lt     = filters.price_lt
        this.page         = filters.page
        this.qty_per_page = filters.qty_per_page
    }
}