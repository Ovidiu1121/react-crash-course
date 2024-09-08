import styles from "./App.module.css";
import { ProductCard } from "./components/ProductCard";
import { ProductLIst } from "./components/ProductList";
import { Fragment } from "react";
import { ProductFilter } from "./components/ProductFilter";
import { useState } from "react";
import { products as productsData } from "./data/products";

function App() {

  let [products, setProducts] = useState(productsData);
  let [favorites, setFavorites] = useState([]);

  let [filters, setFilters] = useState({
    price: {
      min: 0,
      max: 999,
    },
    other: 'other value'
  });

  function handlePurchase(productId, stockCount) {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, stockCount } : product
      )
    );
  }

  function handleFilter(key, value) {
    setFilters((prevFilter) => ({
      ...prevFilter,
      price: {
        ...prevFilter.price,
        [key]: value,

      }
    }))
  }

  function handleFavorites(productId) {

    if (favorites.includes(productId)) {
      setFavorites((prevFavorites) => prevFavorites.filter(id => id !== productId))
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, productId])
    }

  }

  return (
    <div className={styles.App}>
      <ProductLIst>
        {products.map(product =>
          <ProductCard
            key={product.title}
            product={product}
            isFavorite={favorites.includes(product.id)}
            onPurchase={handlePurchase}
            onFavorite={handleFavorites}
          />)}
      </ProductLIst>

      <h2>Product filtered by price</h2>
      <ProductFilter filters={filters} onFilter={handleFilter} />

      {products.filter(({ price }) => price >= filters.price.min && price <= filters.price.max)
        .map(({ title, price }) => (
          <Fragment key={title}>
            <hr className={styles.ListDivider} />
            <p className={styles.ListTitle}>
              {title} costs ${price}
            </p>
          </ Fragment>
        ))
      }


    </div >
  );
}

export default App;