import Product from "@/app/component/Product";

const generateStaticParams = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  //   console.log(data.products);
  return data.products.map((p) => ({
    id: p.id.toString(),
  }));
};
const getProduct = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return data;
};
const productPage = async ({ params }) => {
  const product = await getProduct(params.id);
  return (
    <div>
      <Product price={product.price} title={product.title} />
    </div>
  );
};

export default productPage;
