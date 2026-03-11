// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  orders.push({
    id: generateUniqueId(),
    customerName,
    items: [...items],
    totalPrice: items.reduce((sum, item) => sum + item.price, 0),
    status: "Menunggu",
  });
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const container = orders.map((order) => {
    if (order.id === orderId) {
      return { ...order, status: status };
    }

    return order;
  });

  orders = container;
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  const total = orders
    .filter((order) => order.status === "Selesai")
    .reduce((sum, order) => sum + order.totalPrice, 0);

  return total;
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const result = orders.filter((order) => order.status === "Selesai");

  orders = result;
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
