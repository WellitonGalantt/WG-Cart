async function fetchSearchProducts(item:string){

  return await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${item}`)
  
    .then(e => e.json())
    .then((e)=>{
      return e.results;
    }).catch(err => console.log(err))
}

export default fetchSearchProducts;