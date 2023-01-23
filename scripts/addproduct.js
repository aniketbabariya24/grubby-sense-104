

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

const url= `http://localhost:2423/products/create`;
const addPackage= document.getElementById('addPackage');


const addProduct = async()=>{
    const name1= document.getElementById('name').value;
    const mrp1= document.getElementById('mrp').value;
    const specialPrice1= document.getElementById('specialPrice').value;
    const image1= document.getElementById('image').value;
    const selectType1= document.getElementById('selectType').value;


    let obj={
       name: name1, 
       mrp: Number(mrp1), 
       price: Number(specialPrice1), 
       category: selectType1,
       image:image1
    }

    try {
         let res= await fetch(url, {
          method:'POST',
          body: JSON.stringify(obj),
          headers:{
            'Content-Type':'application/json'
          }

         });

         let data= await res.json();
         console.log(data);
    } catch (error) {
      console.log(error);
    }
}
const getProduct = async()=>{
 try {
         let res= await fetch("http://localhost:2423/products")
         let data= await res.json();
         appendTable(data);
    } catch (error) {
      console.log(error);
    }
}

getProduct();

const appendTable=(data)=>{
    data.forEach(el=>{
        const tr= document.createElement('tr');
        const trContent=` <td>${el.name}</td>
                          <td>${el.mrp}</td>
                          <td>${el.price}</td>
                          <td>${el.category}</td>
                          <td id="updatePro class="primary">Update</td>
                          <td class="danger">Delete</td>`
                           
                          tr.innerHTML=trContent;
    
                          document.querySelector('table tbody').appendChild(tr);
    })
}

const upDate= document.querySelectorAll(".primary");
