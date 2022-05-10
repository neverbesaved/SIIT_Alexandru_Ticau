import { useState } from "react";
import "./App.css";
function FilterableTable(props) {
  const [userText, setText] = useState("");
  const [inStock, setStock] = useState(false);
  const handleUserTextChange = (userText) => {
    setText(userText);
  };
  const handleInStockChange = (inStock) => {
    setStock(inStock);
  };
  return (
    <div className="product-div">
      <SearchBar
        userText={userText}
        inStock={inStock}
        onUserTextChange={handleUserTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        products={props.products}
        userText={userText}
        inStock={inStock}
      />
    </div>
  );
}
function SearchBar(props) {
  const handleUserTextChange = (e) => {
    props.onUserTextChange(e.target.value);
  };

  const handleInStockChange = (e) => {
    props.onInStockChange(e.target.checked);
  };

  return (
    <form className="filter-form">
      <input
        className="user-input"
        type="text"
        value={props.userText}
        onChange={handleUserTextChange}
      />
      <p className="filter-checkbox">
        <input
          type="checkbox"
          value={props.inStock}
          onChange={handleInStockChange}
        />
        Only show products in stock.
      </p>
    </form>
  );
}
function ProductTable(props) {
  const userText = props.userText;
  const inStock = props.inStock;

  const rows = [];
  let lastCategory = null;

  props.products.forEach((product) => {
    if (product.name.indexOf(userText) === -1) {
      return;
    }

    if (inStock && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
function ProductCategoryRow(props) {
  const category = props.category;
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}
function ProductRow(props) {
  const product = props.product;
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "#c9184a" }}>{product.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
function App() {
  return (
    <div className="App">
      <FilterableTable products={PRODUCTS} />
    </div>
  );
}

const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  {
    category: "Electronics",
    price: "$599.99",
    stocked: true,
    name: "IPad",
  },
  {
    category: "Games",
    price: "Free",
    stocked: true,
    name: "Counter-Strike",
  },
  {
    category: "Games",
    price: "$19.99",
    stocked: true,
    name: "Warcraft",
  },
  {
    category: "Games",
    price: "$59.99",
    stocked: false,
    name: "GTA",
  },
];

export default App;
