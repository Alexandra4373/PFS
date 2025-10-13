import Header from './components/Header';
import Footer from './components/Footer';
// import Product from './components/Product';


const products = [
  {
    name: "Shemah Instant Rice Porridge Mix",
    price: "GH₵43.00",
    salePrice: "GH₵40.00",
    image: "https://via.placeholder.com/300x200?text=Rice+Porridge+Mix",
    sale: true,
  },
  {
    name: "Shemah Instant Rice Porridge Mix (with Carrot)",
    price: "GH₵43.00",
    salePrice: "GH₵40.00",
    image: "https://via.placeholder.com/300x200?text=Carrot+Mix",
    sale: true,
  },
  {
    name: "Shemah Instant Rice Porridge Mix (with Coconut Chunks)",
    price: "GH₵45.00",
    salePrice: "GH₵42.00",
    image: "https://via.placeholder.com/300x200?text=Coconut+Chunks",
    sale: true,
  },
  {
    name: "Shemah Instant Rice Porridge Mix (with Groundnut Chunks)",
    price: "GH₵45.00",
    salePrice: "GH₵45.00",
    image: "https://via.placeholder.com/300x200?text=Groundnut+Chunks",
    sale: false,
  },
];

function App() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-green-700 text-white py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to PFS Products</h1>
          <p className="text-lg">Delicious, nutritious instant rice porridge mixes for every taste!</p>
        </section>

        {/* Product Grid */}
        <section className="max-w-6xl mx-auto py-12 px-4">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
                <img
                src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <div className="mb-2">
                  {product.sale ? (
                    <div>
                      <span className="text-gray-500 line-through mr-2">{product.price}</span>
                      <span className="text-green-700 font-bold">{product.salePrice}</span>
                      <span className="ml-2 px-2 py-1 bg-red-100 text-red-700 text-xs rounded">Sale</span>
                    </div>
                  ) : (
                    <span className="text-gray-800 font-bold">{product.price}</span>
                  )}
                </div>
                <button className="mt-auto bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
  }

export default App;