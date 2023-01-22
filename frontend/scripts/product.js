
  const  data= [
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image: "https://www.ikea.com/in/en/images/products/glypen-mixer-tap-stainless-steel-effect__0733630_pe739045_s5.jpg?f=xxs",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "https://www.ikea.com/in/en/images/products/glypen-mixer-tap-stainless-steel-effect__0733630_pe739045_s5.jpg?f=xxs",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "https://www.ikea.com/in/en/images/products/glypen-mixer-tap-stainless-steel-effect__0733630_pe739045_s5.jpg?f=xxs",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "https://www.ikea.com/in/en/images/products/glypen-mixer-tap-stainless-steel-effect__0733630_pe739045_s5.jpg?f=xxs",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "https://www.ikea.com/in/en/images/products/glypen-mixer-tap-stainless-steel-effect__0733630_pe739045_s5.jpg?f=xxs",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "https://www.ikea.com/in/en/images/products/glypen-mixer-tap-stainless-steel-effect__0733630_pe739045_s5.jpg?f=xxs",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "https://www.ikea.com/in/en/images/products/glypen-mixer-tap-stainless-steel-effect__0733630_pe739045_s5.jpg?f=xxs",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "https://www.ikea.com/in/en/images/products/glypen-mixer-tap-stainless-steel-effect__0733630_pe739045_s5.jpg?f=xxs",
    },
  ]
const gallery= document.getElementById('products')
const display = (data) => {
  gallery.innerHTML = null;
  data.forEach((el) => {
      // console.log('el',el);
  
    
      
      let div = document.createElement("div");
      div.setAttribute("class", "proDiv");

     
      let imgDiv= document.createElement("div");
      imgDiv.setAttribute("class", "image");

      const img = document.createElement('img');
      img.src = el.image
     
      imgDiv.append(img);

      let textDiv= document.createElement('div');
      // textDiv.setAttribute("class", "textDiv");

      const heading = document.createElement("p");
      heading.innerText = el.productName;
      heading.className='product-name'
      
      const priceBtn = document.createElement("button");
      priceBtn.setAttribute ("id","priceBtn")
      
      let sTag= document.createElement("s");
      sTag.innerText = "MRP ₹"+el.price ;
      priceBtn.append(sTag);

      const priceBtn2 = document.createElement("button");
      priceBtn2.setAttribute ("id","priceBtn2")
      priceBtn2.innerText = "MRP ₹"+el.price;
      let addtoCart=JSON.parse(localStorage.getItem('addtoCart'))||[]
      const bun = document.createElement("button");
      bun.setAttribute ("id","addBtn")
      bun.innerText="ADD"
      bun.addEventListener('click',function(){
          // console.log("invoked function")
          // console.log(el.alt_description);
          let obj={
              img:el.urls.small,
              name:el.alt_description,
              price:'100',
              disc:'130',

          }
          addtoCart.push(obj)
          localStorage.setItem('items',JSON.stringify(addtoCart))
          
      })

      textDiv.append(heading,priceBtn,priceBtn2,bun);
      
     
      div.append(imgDiv, textDiv);
      gallery.append(div)
  
  });
}

display(data);
//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}
//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".proDiv");
  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});
//Initially display all products
window.onload = () => {
  filterProduct("all");
};