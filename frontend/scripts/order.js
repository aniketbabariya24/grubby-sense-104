const orders= [
    {
        productName: 'Nike Shose 800',
        productNumber: 7841,
        paymentStatus: "Due",
        shipping: "Pending"
    },
    {
        productName: 'Nike Shose 800',
        productNumber: 7841,
        paymentStatus: "Due",
        shipping: "Declined"
    },
    {
        productName: 'Nike Shose 800',
        productNumber: 7841,
        paymentStatus: "Due",
        shipping: "Pending"
    },
    {
        productName: 'Nike Shose 800',
        productNumber: 7841,
        paymentStatus: "Due",
        shipping: "Pending"
    },
    {
        productName: 'Nike Shose 800',
        productNumber: 7841,
        paymentStatus: "Due",
        shipping: "Declined"
    }
]

orders.forEach(el=>{
    const tr= document.createElement('tr');
    const trContent=` <td>${el.productName}</td>
                      <td>${el.productNumber}</td>
                      <td>${el.paymentStatus}</td>
                      <td class="${el.shipping==='Declined' ? 'danger' :  el.shipping==='pending' ? 'warning': 'primary'}">${el.shipping}</td>
                      <td class="primary">Details</td>`
                       
                      tr.innerHTML=trContent;

                      document.querySelector('table tbody').appendChild(tr);
})