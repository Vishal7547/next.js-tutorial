import ProductBtn from "../product/page";
const fetchApi = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
};

const serverApi = async () => {
  const data = await fetchApi();
  console.log(data);
  return (
    <div>
      <h1>Product list</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h1>Name:{item.title}</h1>
          <ProductBtn price={item.price} />
        </div>
      ))}
    </div>
  );
};

export default serverApi;
