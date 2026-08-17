const getProductsData = async()=>{
    try{
        const res =fetch("https://dummyjson.com/products")
        const data = await  res.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
getProductsData();

fetch("")