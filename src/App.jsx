import Header from './components/Header';
import Footer from './components/Footer';

// SVG icons (Heroicons - you can move these to a separate file if preferred)
const HeartIcon = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={filled ? "currentColor" : "none"}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`w-6 h-6 ${filled ? "text-red-500" : "text-gray-400"} transition`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 7.5a3.75 3.75 0 00-6 0L12 9l1.5-1.5a3.75 3.75 0 016 0c1.5 1.5 1.5 4 0 5.5l-7.5 7.5-7.5-7.5c-1.5-1.5-1.5-4 0-5.5a3.75 3.75 0 016 0L12 9l1.5-1.5z"
    />
  </svg>
);

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-green-700 transition group-hover:text-green-900"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 2.25l1.5 1.5m0 0l1.5 1.5m-3-3l16.5 16.5m-16.5-16.5l16.5 16.5m-16.5-16.5l16.5 16.5"
    />
  </svg>
);

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
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Welcome to PFS Products</h1>
          <p className="text-lg animate-fade-in delay-100">Delicious, nutritious instant rice porridge mixes for every taste!</p>
        </section>

        {/* Product Grid */}
        <section className="max-w-6xl mx-auto py-12 px-4">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800 animate-fade-in">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-lg shadow hover:shadow-2xl transition-shadow duration-300 p-4 flex flex-col relative overflow-hidden transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 animate-fade-in"
              >
                {/* Like Button */}
                <button className="absolute top-4 right-4 z-10 bg-white rounded-full p-1 shadow hover:bg-red-100 transition">
                  <HeartIcon filled={false} />
                </button>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded mb-4 transition-transform duration-300 group-hover:scale-105"
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
                <button className="mt-auto flex items-center justify-center gap-2 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition group">
                  <CartIcon />
                  Add to Cart
                </button>
                {/* Animated border effect */}
                <span className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-green-700 transition-all duration-300 pointer-events-none"></span>
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

