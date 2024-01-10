import Product from "../component/Product";
import ProductBtn from "../component/ProductBtn";
const getProduct = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  //   console.log(data.products);
  return data.products;
};

const Products = async () => {
  let product = await getProduct();
  console.log(product);
  return (
    <div>
      <h1>Products</h1>
      {product.length > 0 &&
        product?.map(({ id, title, price }) => (
          <>
            <Product key={id} title={title} price={price} />
            <ProductBtn id={id} />
          </>
        ))}
    </div>
  );
};

export default Products;
