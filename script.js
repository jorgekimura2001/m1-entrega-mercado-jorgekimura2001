// Função que recebe um array de objetos (array de objetos de produtos que está no products.js)

function categoriaProdutos (array){
    const ulFrutas = document.querySelector('.secao-frutas') // criou-se no HTML a classe e só selecionou para armazenar em uma variavel
    
    const ulBebidas = document.querySelector('.secao-bebidas') // criou-se no HTML a classe e só selecionou para armazenar em uma variavel

    const ulHigiene = document.querySelector('.secao-higiene') // criou-se no HTML a classe e só selecionou para armazenar em uma variavel
  //array de objetos.método(função (parâmetro) {o que deve fazer}) 
    array.forEach(item => { // Para percorrer o array de objetos e fazer a vericaçãp juntamente com a lista e outros elementos HTML
       if(item.category == 'Frutas'){ // verificação caso a categoria seja frutas deve-se criar uma lista e incrementar na ul de frutas 
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
    if(item.category == 'Bebidas'){ // verificação caso a categoria seja bebidas deve-se criar uma lista e incrementar na ul de bebidas
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
    if(item.category == 'Higiene'){ // verificação caso a categoria seja higiene deve-se criar uma lista e incrementar na ul de higiene
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
categoriaProdutos(products)
