const data = [
  {
    id: 1,
    productName: "Product 1",
    price: 100,
    discount: 20,
    productType: "cosmetics",
  },
  {
    id: 2,
    productName: "Product 2",
    price: 300,
    discount: 20,
    productType: "cosmetics",
  },
  {
    id: 3,
    productName: "Product 3",
    price: 500,
    discount: 20,
    productType: "cosmetics",
  },
  {
    id: 4,
    productName: "Product 4",
    price: 100,
    discount: 20,
    productType: "cosmetics",
  },
  {
    id: 5,
    productName: "Product 30",
    price: 100,
    discount: 20,
    productType: "cosmetics",
  },
  {
    id: 6,
    productName: "Product 14",
    price: 100,
    discount: 20,
    productType: "cosmetics",
  },
  {
    id: 7,
    productName: "Product 1",
    price: 100,
    discount: 20,
    productType: "cosmetics",
  },
];

const ProductList = () => {
  return (
    <div>
      <h2>Product List</h2>
      {data.map((item, index) => {
        console.log("Item, index", item, index);
        return (
          <div key={item.id}>
            <h6>Product Name</h6>
            <span>{item.productName}</span>
            <span>{item.price}</span>
            <span>{item.productType}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
