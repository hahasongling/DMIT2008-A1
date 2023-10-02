function objectTemplate ({product_id, company, image, type, price, description,star_rating, ...object}){
    

    const template = `
    <aside class="object">
    <header>
      <h2>Product ID: ${product_id}</h2>
    </header>
    <div class="profile">
      <img src="${image}" alt="${product_id}" />

      <div class="bio">
        <ul>
          <li>Company: ${company}</li>
          <li>Type: ${type}</li>
          <li>Price: $${price}</li>
          <li>Description: ${description}</li>
          <li>Star Rating: ${star_rating}</li>
        </ul>
      </div>
    </div>
  </aside>
    `

    const elm = document.createRange().createContextualFragment(template).children[0]

    return elm

   }

   export {objectTemplate}