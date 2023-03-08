fetch("http://127.0.0.1:8000/api/products")
  .then((response) => response.json())
  .then((products) => {

    console.log(products);

   let tb = document.getElementsByTagName('tbody');

    products.forEach(p => {
        let tr = document.createElement('tr')

        let tdId = document.createElement('td')
        tdId.innerText = p.id
        tr.appendChild(tdId)

        let tdName = document.createElement('td')
        tdName.innerText = p.name
        tr.appendChild(tdName)

        let tdSlug = document.createElement('td')
        tdSlug.innerText = p.slug
        tr.appendChild(tdSlug)

        let tdDescription = document.createElement('td')
        tdDescription.innerText = p.description
        tr.appendChild(tdDescription)

        let tdPrice = document.createElement('td')
        tdPrice.innerText = p.price
        tr.appendChild(tdPrice)
    
        tb[0].appendChild(tr)
    }); 

  });
