import { Product } from "./Product";

function Products({ products = [] , children}) {
    console.log(children);
//   if (products.length < 1) {
//     return;
//   }

  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      {
        products.map(({ title, price }, i) => {
          return <Product key={i} title={title} price={price} />;
        })}

        {children}
    </div>
  );
}

export default Products;
