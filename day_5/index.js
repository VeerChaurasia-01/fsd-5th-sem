const prodcontainer = document.getElementById("prod-container");
let products = [];

const showProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  products=data.products;
  products.map((product)=>{
    const div=document.createElement("div");
    const img=document.createElement("img");
    img.src=product.thumbnail;
    Image.alt="https://img.magnific.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg"
    const title=document.createElement("h1");
    title.innerText = product.tittle;

    const price=document.createElement("h2");
    price.innerText = `$${product.price}`;
    const incrementBtn=document.createElement("button");
    incrementBtn.innerText="+";
    const decrementBtn=document.createElement("button");
    decrementBtn.innerText="-";
    const span=document.createElement("span");
    span.innerText="ADD";

    div.appendChild(img);
     div.appendChild(title);
      div.appendChild(price);
       div.appendChild(decrementBtn);
        div.appendChild(span);
         div.appendChild(incrementBtn);

         prodcontainer.appendChild(div);
         let counter=0;

         incrementBtn.addEventListener('click',()=>{
            counter++;
            span.innerText=counter;
            span.innerText=counter;
            localStorage.setItem("id",product);
                localStorage.setItem("id",product.id);
                localStorage.setItem("image",product.thumbnail);
                localStorage.setItem("title",product.title);
                localStorage.setItem("price",product.price);

         })
         decrementBtn.addEventListener("click",()=>{
            if(counter>0){
                counter--;
                
            }
         })

  })
  
}
showProducts();