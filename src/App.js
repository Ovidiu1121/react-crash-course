import "./App.css";
import { ProductCard } from "./components/ProductCard";
import { ProductLIst } from "./components/ProductList";

function App() {

  const product = {
    imageSrc: "images/iphone.png",
    title: "iPhone 15 Pro",
    specification: [
      "A17 Pro chip with 6-core GPU",
      "3x or 5x Telephoto camera",
      "Up to 29 hours video playback"
    ],
    price: 999
  };

  return (
    <div className="App">
      <ProductLIst>
        <ProductCard width="96px" height="96px" background="darkolivegreen" product={product} />
        <ProductCard width="64px" height="64px" product={product} />
        <ProductCard width="128px" height="128px" background="peru" product={product} />
      </ProductLIst>
    </div>
  );
}

export default App;