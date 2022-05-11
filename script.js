function frutas (array){
  // const mainFrutas = document.querySelector('.fruits')
    const ulFrutas = document.querySelector('.secao-frutas')
    
    const ulBebidas = document.querySelector('.secao-bebidas')

    const ulHigiene = document.querySelector('.secao-higiene')

    array.forEach(item => {
       if(item.category == 'Frutas'){
       ulFrutas.innerHTML += `<li class="product">
       <img
         src=${item.image}
         alt=""
         title=""
         class="product-img"
       />
       <main class="product-main">
         <h1 class="product-title">${item.title}</h1>
         <h5 class="product-category">${item.category}</h5>
         <strong class="product-price">R$ ${item.price}</strong>
       </main>
     </li>`
    }
    if(item.category == 'Bebidas'){
        ulBebidas.innerHTML += `<li class="product">
        <img
          src=${item.image}
          alt=""
          title=""
          class="product-img"
        />
        <main class="product-main">
          <h1 class="product-title">${item.title}</h1>
          <h5 class="product-category">${item.category}</h5>
          <strong class="product-price">R$ ${item.price}</strong>
        </main>
      </li>`
    }
    if(item.category == 'Higiene'){
        ulHigiene.innerHTML += `<li class="product">
        <img
          src=${item.image}
          alt=""
          title=""
          class="product-img"
        />
        <main class="product-main">
          <h1 class="product-title">${item.title}</h1>
          <h5 class="product-category">${item.category}</h5>
          <strong class="product-price">R$ ${item.price}</strong>
        </main>
      </li>`
    }
})  
    
}
frutas(products)
