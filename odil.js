const productsList =document.querySelector(".products_list ")

fetch("https://fakestoreapi.com/products?limit=10")
.then(response =>response.json())
.then(data =>{
    productsList.innerHTML=data.map(item => `
            <li class="products_item">
                    <img src="${item.image}" alt="">

                    <h3 class="products_name">
                      ${item.title}</h3>
                        <p class="products_info">
                           ${item.description.slice(0,80)}...
                        </p>
                        <div class="wrapper">
                            <span>$${item.price}</span>
                            <button>Sotib olsh</button>
                        </div>
                </li>
        `).join("")
})
.catch(err => console.log(err.message) )
