import React, { useState } from "react";
import { ShoppingCart, X, Plus, Minus, Star, Heart, Eye } from "lucide-react";

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalQuantity, setModalQuantity] = useState(1);
  const [notification, setNotification] = useState("");

  // Sample products data
  const products = [
    {
      id: 1,
      name: "AirPods Pro Max",
      price: 549.99,
      originalPrice: 599.99,
      image: "🎧",
      category: "Audio",
      rating: 4.8,
      reviews: 2456,
      description:
        "Premium over-ear headphones with active noise cancellation, spatial audio, and up to 20 hours of battery life.",
      features: [
        "Active Noise Cancellation with Transparency mode",
        "Spatial Audio with dynamic head tracking",
        "20-hour battery life",
        "Premium materials and comfort",
        "Digital Crown for precise control",
      ],
      inStock: true,
      fastDelivery: true,
    },
    {
      id: 2,
      name: 'MacBook Pro 16"',
      price: 2499.99,
      originalPrice: 2699.99,
      image: "💻",
      category: "Computers",
      rating: 4.9,
      reviews: 1834,
      description:
        "Powerful laptop with M3 Pro chip, stunning Liquid Retina XDR display, and all-day battery life.",
      features: [
        "M3 Pro chip with 12-core CPU",
        "16.2-inch Liquid Retina XDR display",
        "22-hour battery life",
        "1TB SSD storage",
        "Advanced camera and audio system",
      ],
      inStock: true,
      fastDelivery: false,
    },
    {
      id: 3,
      name: "iPhone 15 Pro",
      price: 999.99,
      originalPrice: 1099.99,
      image: "📱",
      category: "Smartphones",
      rating: 4.7,
      reviews: 3421,
      description:
        "The most advanced iPhone with titanium design, A17 Pro chip, and professional camera system.",
      features: [
        "A17 Pro chip with 6-core GPU",
        "Pro camera system with 5x Telephoto",
        "Titanium design with Action Button",
        "USB-C connectivity",
        "Up to 29 hours video playback",
      ],
      inStock: true,
      fastDelivery: true,
    },
    {
      id: 4,
      name: 'iPad Pro 12.9"',
      price: 1099.99,
      originalPrice: 1199.99,
      image: "📲",
      category: "Tablets",
      rating: 4.8,
      reviews: 987,
      description:
        "Ultimate iPad experience with M2 chip, Liquid Retina XDR display, and Apple Pencil support.",
      features: [
        "M2 chip with 8-core CPU",
        "12.9-inch Liquid Retina XDR display",
        "Apple Pencil (2nd generation) support",
        "12MP Ultra Wide front camera",
        "All-day battery life",
      ],
      inStock: false,
      fastDelivery: false,
    },
    {
      id: 5,
      name: "Apple Watch Series 9",
      price: 399.99,
      originalPrice: 449.99,
      image: "⌚",
      category: "Wearables",
      rating: 4.6,
      reviews: 1567,
      description:
        "Advanced health and fitness tracking with the brightest Always-On Retina display.",
      features: [
        "S9 SiP with Neural Engine",
        "Brightest Always-On Retina display",
        "Advanced health and safety features",
        "Carbon neutral combinations",
        "Up to 18 hours battery life",
      ],
      inStock: true,
      fastDelivery: true,
    },
    {
      id: 6,
      name: "AirTag 4-Pack",
      price: 99.99,
      originalPrice: 119.99,
      image: "🏷️",
      category: "Accessories",
      rating: 4.5,
      reviews: 2103,
      description:
        "Keep track of your items with precision finding using Ultra Wideband technology.",
      features: [
        "Precision Finding with Ultra Wideband",
        "Built-in speaker for audible alerts",
        "Water resistant design",
        "Replaceable battery",
        "Privacy and security built-in",
      ],
      inStock: true,
      fastDelivery: true,
    },
  ];

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 3000);
  };

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
    showNotification(`Added ${product.name} to cart!`);
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setModalQuantity(1);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    setModalQuantity(1);
  };

  const handleModalAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct, modalQuantity);
      closeProductModal();
    }
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 bg-[#35441B] text-white px-6 py-3 rounded-full shadow-lg z-50 animate-pulse">
          {notification}
        </div>
      )}

      {/* Header */}
      <header className="bg-gray-50 border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TechStore
              </h1>
              <span className="hidden sm:block text-gray-600 text-sm">
                Premium Electronics
              </span>
            </div>

            <button
              onClick={() =>
                alert(
                  `Cart Total: $${cartTotal.toFixed(
                    2
                  )}\nItems: ${cartItemCount}`
                )
              }
              className="relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <ShoppingCart className="inline w-5 h-5 mr-2" />
              Cart
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>
                {!product.inStock && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Out of Stock
                  </div>
                )}
                {product.fastDelivery && product.inStock && (
                  <div className="absolute top-3 right-3 bg-[#35441B] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Fast Delivery
                  </div>
                )}
                <button className="absolute top-3 left-3 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 text-sm font-medium">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-gray-900 text-sm">
                      {product.rating}
                    </span>
                    <span className="text-gray-500 text-sm">
                      ({product.reviews})
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-red-500 line-through text-lg">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (product.inStock) {
                        addToCart(product);
                      }
                    }}
                    disabled={!product.inStock}
                    className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                      product.inStock
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white hover:scale-105"
                        : "bg-gray-500 text-gray-300 cursor-not-allowed"
                    }`}
                  >
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </button>

                  <button
                    onClick={() => openProductModal(product)}
                    className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Eye className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedProduct.name}
                </h2>
                <button
                  onClick={closeProductModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Product Image */}
              <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-8xl mb-8">
                {selectedProduct.image}
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-medium">
                    {selectedProduct.category}
                  </span>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-gray-900">
                      {selectedProduct.rating}
                    </span>
                    <span className="text-gray-500">
                      ({selectedProduct.reviews} reviews)
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-gray-900">
                    ${selectedProduct.price}
                  </span>
                  {selectedProduct.originalPrice > selectedProduct.price && (
                    <span className="text-red-500 line-through text-xl">
                      ${selectedProduct.originalPrice}
                    </span>
                  )}
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Features
                  </h3>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quantity Selector */}
                {selectedProduct.inStock && (
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-900 font-medium">Quantity:</span>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() =>
                          setModalQuantity(Math.max(1, modalQuantity - 1))
                        }
                        className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-4 h-4 text-gray-600" />
                      </button>
                      <span className="text-xl font-bold text-gray-900 w-8 text-center">
                        {modalQuantity}
                      </span>
                      <button
                        onClick={() => setModalQuantity(modalQuantity + 1)}
                        className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-6">
                  <button
                    onClick={handleModalAddToCart}
                    disabled={!selectedProduct.inStock}
                    className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      selectedProduct.inStock
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white hover:scale-105"
                        : "bg-gray-400 text-gray-200 cursor-not-allowed"
                    }`}
                  >
                    {selectedProduct.inStock
                      ? `Add ${modalQuantity} to Cart`
                      : "Out of Stock"}
                  </button>
                  <button
                    onClick={closeProductModal}
                    className="px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-all duration-300"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
