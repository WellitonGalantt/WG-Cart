
function formatCurrency(number:number, currency:string){
  return new Intl.NumberFormat('pt-BR',{
    style: 'currency',
    currency: currency
  }).format(number);
}

export default formatCurrency;