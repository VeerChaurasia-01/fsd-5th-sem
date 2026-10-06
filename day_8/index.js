const getProductsData = async () => {
const res = await fetch("https://dummyjson.com/products");
const data = await res.json();

return data.products;

};

const HeaderComponent = () => {
return (
<div>
<h1>E-commerce Webpage</h1>
</div>
);
};

const ProductComponent = ({products}) => {
  return (
    <div id="prod-container">
        {products.map((product) => <div>
        <img src={product.thumbnail}></img>
        <h1>{product.title}</h1>
        <h2>{product.price}</h2>
      </div>)}
    </div>)
  
}

const FooterComponent = () => {
return (
<div>
<h2>Copyright All Rights Reserved</h2>
</div>
);
};

const appRender = async () => {

// Fetch product data
const products = await getProductsData();

// Create root
const root = ReactDOM.createRoot(
    document.getElementById("root")
);

// Render React components
root.render(
    <>
        <HeaderComponent />

        <ProductComponent
            products={products}
        />

        <FooterComponent />
    </>
);

};

appRender();