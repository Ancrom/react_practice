import { Component } from "react";
const products = [
  {
    id: 1,
    title: "Product 1",
    price: 100,
    checked: false,
  },
  {
    id: 2,
    title: "Product 2",
    price: 200,
    checked: false,
  },
  {
    id: 3,
    title: "Product 3",
    price: 300,
    checked: false,
  },
  {
    id: 4,
    title: "Product 4",
    price: 300,
    checked: false,
  },
  {
    id: 5,
    title: "Product 5",
    price: 100,
    checked: false,
  },
];

class AppBody extends Component {
  state = {
    products: products,
    resultPrice: 0,
  };

  onChecked = (id) => {
    const { products } = this.state;
    const index = products.findIndex((item) => item.id === id);
    products[index].checked = !products[index].checked;
    this.setState({ products }, () => this.calculateSum());
  };

  calculateSum = () => {
    const { products } = this.state;
    this.setState({
      resultPrice: products.reduce(
        (acc, item) => (item.checked ? acc + item.price : acc),
        0
      ),
    });
  };

  render() {
    const { products, resultPrice } = this.state;
    return (
      <div className="app-body">
        <p className="resultPrice">Сумма: {resultPrice}</p>
        {products.map((item) => (
          <div
            className="product"
            key={item.id}
            onClick={() => this.onChecked(item.id)}
          >
            <div className="product-title">{item.title}</div>
            <div className="product-price">{item.price}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default AppBody;
