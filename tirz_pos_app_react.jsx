export default function TirzPOSApp() {
  const products = [
    { id: 1, name: 'Tirz 2.5mg', price: 1500, stock: 20 },
    { id: 2, name: 'Tirz 5mg', price: 2500, stock: 15 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
          <h1 className="text-3xl font-bold mb-2">PepZii POS System</h1>
          <p className="text-gray-500">Live Inventory & Sales Tracker</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-5 shadow">
            <h2 className="text-sm text-gray-500">Total Products</h2>
            <p className="text-3xl font-bold">2</p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow">
            <h2 className="text-sm text-gray-500">Total Stock</h2>
            <p className="text-3xl font-bold">35</p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow">
            <h2 className="text-sm text-gray-500">Today Sales</h2>
            <p className="text-3xl font-bold">₱0</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Products</h2>

          <div className="grid gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-2xl p-4 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-gray-500">₱{product.price}</p>
                  <p className="text-sm text-gray-400">
                    Stock: {product.stock}
                  </p>
                </div>

                <button className="bg-black text-white px-6 py-3 rounded-2xl hover:opacity-90 transition">
                  Sell
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Recent Sales</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-3">Date</th>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="py-4 text-gray-500">No sales yet</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
