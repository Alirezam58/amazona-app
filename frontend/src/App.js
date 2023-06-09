import Product from './components/Product.js';
import data from './data.js';

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">
            Amazona
          </a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </main>
      <footer className="row center">
        <p>All rights reserved for www.npisoftware.ir</p>
      </footer>
    </div>
  );
}

export default App;
