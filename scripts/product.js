const getProduct = async()=>{
    try {
            let res= await fetch("http://localhost:2423/products")
            let data= await res.json();
            display(data);
       } catch (error) {
         console.log(error);
       }
   }
   
   getProduct();
  const gallery= document.getElementById('products')
  const display = (data) => {
    gallery.innerHTML = null;
    data.forEach((el) => {
        
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
        heading.innerText = el.name;
        heading.className='product-name'
        
        const priceBtn = document.createElement("button");
        priceBtn.setAttribute ("id","priceBtn")
        
        let sTag= document.createElement("s");
        sTag.innerText = "MRP ₹"+el.mrp ;
        priceBtn.append(sTag);

        const priceBtn2 = document.createElement("button");
        priceBtn2.setAttribute ("id","priceBtn2")
        priceBtn2.innerText = "₹"+el.price;
        let addtoCart=JSON.parse(localStorage.getItem('addtoCart'))||[]
        const bun = document.createElement("button");
        bun.setAttribute ("id","addBtn")
        bun.innerText="ADD"
        bun.addEventListener('click',function(){
            // console.log("invoked function")
            // console.log(el.alt_description);
            let obj={
               image: el.image,
               price: el.price,
               name: el.name
            }
            addtoCart.push(obj)
            localStorage.setItem('items',JSON.stringify(addtoCart))
            
        })

        textDiv.append(heading,priceBtn,priceBtn2,bun);
        
       
        div.append(imgDiv, textDiv);
        gallery.append(div)
    
    });
}

// display(data);
  //Search button click

const filterDecoration=async ()=>{
    try {
            let res= await fetch("http://localhost:2423/products/decoration")
            let data= await res.json();
            display(data);
       } catch (error) {
         console.log(error);
       }
   }
const filterKitchen=async ()=>{
    try {
            let res= await fetch("http://localhost:2423/products/kitchen")
            let data= await res.json();
            display(data);
       } catch (error) {
         console.log(error);
       }
   }
const filterFurniture=async ()=>{
    try {
            let res= await fetch("http://localhost:2423/products/furniture")
            let data= await res.json();
            display(data);
       } catch (error) {
         console.log(error);
       }
   }
   
const sorthigh=async ()=>{
    try {
            let res= await fetch("http://localhost:2423/products/sorthigh")
            let data= await res.json();
            display(data);
       } catch (error) {
         console.log(error);
       }
   }
const sortlow=async ()=>{
    try {
            let res= await fetch("http://localhost:2423/products/sortlow")
            let data= await res.json();
            display(data);
       } catch (error) {
         console.log(error);
       }
   }
   
   


  
  //Initially display all products
  window.onload = () => {
    getProduct();
  };

  const search= document.getElementById('search');
  search.onclick=()=>{
    window.location.href='cart.html'
  }