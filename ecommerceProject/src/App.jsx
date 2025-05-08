import { useState } from 'react';
import ProductList from './components/ProductList';
import productsData from './data/products';
import './App.css';

function App() {
  const [products] = useState(productsData);
  const [category, setCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = category === 'All'
    ? products
    : products.filter(product => product.category === category);

  return (
    <div className="app-container">
      <h1>🛍️ Zeal's Warehouse</h1>

      <div className="filter-bar">
        <label>Filter by category:</label>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
