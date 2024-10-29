export const currencyFormatter = (currency:number)=>{
    return new Intl.NumberFormat('pt-BR',{
        currency:'BRL',
        style:'currency'
    }).format(currency)
}